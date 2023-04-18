import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Produto, ProdutosService } from 'src/app/servicos/produtos.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutosPage implements OnInit {
  produtos: Produto[] = [];

  constructor( private service: ProdutosService, private nav: NavController) { }

  ngOnInit() {
    this.service.listar().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
    
  }
  novo(){
this.nav.navigateForward("incluirprodutos");
  }
  iniciarEdicao(id:any){
this.nav.navigateForward(["incluirprodutos",{idproduto:id}]);
  }

}
