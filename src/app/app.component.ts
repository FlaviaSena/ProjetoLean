import { Component } from '@angular/core';
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
  constructor(private nav: NavController, private service: AutenticacaoService, private alerta: AlertController) {}

  func1(){
    console.log("Função 1");
  }

  cadastro(){
    this.nav.navigateForward("cadastro");
  }

  login(){
    this.nav.navigateForward("login");
  }

  sair(){
    this.service.sair();

    this.nav.navigateForward("login");

    this.logout();

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
