import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { AppComponent } from 'src/app/app.component';
 
@Component({
  selector: 'app-incluirprodutos',
  templateUrl: './incluirprodutos.page.html',
  styleUrls: ['./incluirprodutos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirprodutosPage implements OnInit {

  produto: any;

  constructor(private service: ProdutosService, private nav: NavController) {
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

  voltarParaHome(){
    this.nav.navigateForward("home");
    
  }
}
