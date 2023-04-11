import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-incluirprodutos',
  templateUrl: './incluirprodutos.page.html',
  styleUrls: ['./incluirprodutos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirprodutosPage implements OnInit {

  produto: any;

  constructor(private service: ProdutosService) {
    this.produto={'prato':'',
      'bebida':'',
      'nome':'',
      'telefone':'',
      'endereco':''
    };
   }

  ngOnInit() {
  }
  incluir(){
    this.service.cadastrar(this.produto);
  }

}
