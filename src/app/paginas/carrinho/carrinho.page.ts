import { CompilerFactory, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CarrinhoService, Compras } from 'src/app/servicos/carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { Produto, ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CarrinhoPage implements OnInit {

  listacompras: Compras[] = [];
  produtos: Produto[] = [];

  item = {} as Compras;
  ids: any;
  constructor(private Pservice: ProdutosService ,private service:CarrinhoService, private nav: NavController,  private rota: ActivatedRoute) { }

  ngOnInit() {
    this.ids = this.rota.snapshot.params['idcompra'];

    let vetor = this.ids.split("-");
    console.log(vetor.length);

    if(this.ids !=undefined){
     for(let i=0; i < vetor.length; i++){
      console.log(vetor[i]);
      if (vetor[i] != ""){
        this.Pservice.buscar(vetor[i]).subscribe(res => {
          this.produtos.push(res);

          this.item.nome = res.nome;
          this.item.prato = res.prato;
          this.item.bebida = res.bebida;
          this.item.valor = res.valor;
          this.item.quantidade = '1'
          this.listacompras.push(this.item);
          console.log("Produto: " + res.nome);
        });
        
        
      }
     }
     //console.log(this.produtos[0].nome);
      //this.Pservice.buscar(this.ids);//.subscribe (res =>{
        //this.listacompras = res;
        //console.log(res);
      //})
    }
  


    //this.service.listar().subscribe(res => {
    //  this.listacompras = res;
    // console.log(this.listacompras);
    //});
    
    

  }

}
