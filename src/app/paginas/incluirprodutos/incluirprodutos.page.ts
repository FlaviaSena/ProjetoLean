import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-incluirprodutos',
  templateUrl: './incluirprodutos.page.html',
  styleUrls: ['./incluirprodutos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirprodutosPage implements OnInit {

  codigo: any;
  produto: any;

  constructor(private service: ProdutosService, private nav: NavController, private rota: ActivatedRoute) {
    this.produto={
      'prato':'',
      'bebida':'',
      'nome':'',
      'valor':''

    };
   }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['codigo'];
    if(this.codigo !=undefined){
      this.service.buscar(this.codigo).subscribe (res =>{
        this.produto = res;
        console.log(res);
      })
    }
    console.log("Código do produto é =" + this.codigo);
  }
  incluir(){
    this.service.cadastrar(this.produto);
    this.nav.navigateForward("home");
  }

  voltar(){
    this.nav.navigateForward("home");
    
  }
}
