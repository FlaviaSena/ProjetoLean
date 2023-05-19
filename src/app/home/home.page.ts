import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { IncluirprodutosPage } from '../paginas/incluirprodutos/incluirprodutos.page';
import { ProdutosService, Produto } from '../servicos/produtos.service';
import { CommonModule } from '@angular/common';
import { AutenticacaoService } from '../servicos/autenticacao.service';
import { CarrinhoPage } from '../paginas/carrinho/carrinho.page';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {
  ids: any ='';
  lcompra: any;

  constructor(private service: ProdutosService, private nav: NavController, private auth:AutenticacaoService, private serv: AutenticacaoService, private alerta: AlertController, private rota: ActivatedRoute ) {
  this.lcompra ={  'nome': '',
  'prato':'',
  'bebida':'',
  'valor': ''
  };

  }

  produtos: Produto[] = [];
  

  ngOnInit() {
    this.service.listar().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });



    this.ids = this.rota.snapshot.params['idcompra'];
    if(this.ids !=undefined){
      this.service.buscar(this.ids).subscribe (res =>{
        this.lcompra = res;
        console.log(res);
      })
    } else {
      this.ids = "";
    }
    console.log("id =" + this.ids);
  }



  carrinho(){
    console.log("IDS: " + this.ids);
    this.nav.navigateForward(["carrinho",{idcompra: this.ids}]);
      }

      compra(idProduto: any){
        console.log(this.auth.retornarUsuarioLogado());
        if (this.auth.retornarUsuarioLogado() !== undefined){
          //this.serv.compra();
          //this.serv.armazenarUsuario(undefined);  
          //this.nav.navigateForward("carrinho");
  
          this.ids += idProduto + "-";
          console.log(this.ids); 
          this.carrinho();
        }else{
          this.naologado();
          this.ids = "";
        }
      }

      async naologado(){
        console.log("não logado");
            const mensagem = await this.alerta.create({
              header: "Você ainda não está logado.",
              message: "Fazer login agora?",
              buttons:[
                {text: "Ok",
                 handler: res => {
                  this.nav.navigateForward("login");
                 } 
                },
                {text: "Cancelar",
                 handler: res => {
                  
                 } 
                }
              ]
            });
            
            await mensagem.present();
      }

}
