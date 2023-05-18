import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CadastroclienteService } from 'src/app/servicos/cadastrocliente.service';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
 
@Component({
  selector: 'app-incluircadastro',
  templateUrl: './incluircadastro.page.html',
  styleUrls: ['./incluircadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirCadastroclientPage implements OnInit {

  id: any;
  cadastrocliente: any;

  constructor(private service: CadastroclienteService, private nav: NavController, private rota:ActivatedRoute, private autenticacao: AutenticacaoService) {
    this.cadastrocliente={'nome':'',
      'telefone':'',
      'cpf':'',
      'email':'',
      'cep':'',
      'rua':'',
      'numero':'',
      'bairro':'',
      'senha':''
    };
   }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idcliente'];
    if(this.id !=undefined){
      this.service.buscar(this.id).subscribe (res =>{
        this.cadastrocliente = res;
        console.log(res);
      })
    }
    console.log("Seu id: " + this.id);
  }
  async incluir(){
    const user = await this.autenticacao.cadastro(this.cadastrocliente['email'], this.cadastrocliente['senha']);
    if(user){
      this.service.cadastrar(this.cadastrocliente);
      this.autenticacao.armazenarUsuario(this.cadastrocliente['email']);
      this.voltar();
    }
  }

  voltar(){
    this.nav.navigateForward("login");
    
  }
}
