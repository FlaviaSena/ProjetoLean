import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CadastroclienteService } from 'src/app/servicos/cadastrocliente.service';
import { AppComponent } from 'src/app/app.component';
 
@Component({
  selector: 'app-incluircadastro',
  templateUrl: './incluircadastro.page.html',
  styleUrls: ['./incluircadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirCadastroclientPage implements OnInit {

  cadastrocliente: any;

  constructor(private service: CadastroclienteService, private nav: NavController) {
    this.cadastrocliente={'nome':'',
      'telefone':'',
      'cpf':'',
      'cep':'',
      'rua':'',
      'numero':'',
      'bairro':''
    };
   }

  ngOnInit() {
  }
  incluir(){
    this.service.cadastrar(this.cadastrocliente);
    this.voltar();
  }

  voltar(){
    this.nav.navigateForward("login");
    
  }
}
