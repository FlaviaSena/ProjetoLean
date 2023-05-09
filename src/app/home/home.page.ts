import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { IncluirprodutosPage } from '../paginas/incluirprodutos/incluirprodutos.page';
import { ProdutosService, Produto } from '../servicos/produtos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {
  constructor(private service: ProdutosService, private nav: NavController) {}

  produtos: Produto[] = [];

  ngOnInit() {
    this.service.listar().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
    
  }


  carrinho(){
    this.nav.navigateForward("carrinho");
      }

}
