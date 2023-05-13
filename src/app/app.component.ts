import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { signOut, Auth } from 'firebase/auth';
import { AutenticacaoService } from './servicos/autenticacao.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private nav: NavController, private service: AutenticacaoService, private alerta: AlertController, private auth:AutenticacaoService ) {}

  func1(){
    console.log("Função 1");
  }

  cadastrar(){
    this.nav.navigateForward("incluircadastro");
  }

  login(){
    this.nav.navigateForward("login");
  }

  sair(){
    console.log(this.auth.retornarUsuarioLogado());
    if (this.auth.retornarUsuarioLogado() !== undefined){
      this.service.sair();
      this.service.armazenarUsuario(undefined);  
      this.nav.navigateForward("login");

      this.logout();
    }
  }
async logout(){
  console.log("LOGOUT");
      const mensagem = await this.alerta.create({
        header: "Você saiu!",
        message: "Aguardamos você em breve ♥.",
        buttons:[
          {text: "Ok",
           handler: res => {
            
           } 
          }
        ]
      });
      console.log("LOGOUT");
      await mensagem.present();
      console.log("LoGOUT");
}

}
