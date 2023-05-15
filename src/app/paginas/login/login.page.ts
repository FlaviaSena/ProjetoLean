import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { HomePage } from 'src/app/home/home.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule ]
})
export class LoginPage implements OnInit {
  credencial!:FormGroup;

  constructor(private service: AutenticacaoService, private fb: FormBuilder,private nav: NavController, 
              private alerta: AlertController) { }

  ngOnInit() {
    this.credencial = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      senha:['',[Validators.required, Validators.minLength]]
    })
  }

  async logar(){
    console.log(this.credencial.get('email')?.value);
    console.log(this.credencial.get('senha')?.value);
    try{
      const user = await this.service.logar(this.credencial.get('email')?.value, this.credencial.get('senha')?.value);
      console.log("Usuario: " + user);
      if(user){
        this.service.armazenarUsuario(this.credencial.get('email')?.value);
        this.nav.navigateForward("home");
      }
    } catch(e){
      console.log(e);
      this.erro();
    }
  }

  async erro(){
    console.log("Erro");
    const mensagem = await this.alerta.create({
      header: "Dados incorretos",
      message: "Email ou senha incorretos.",
      buttons:[
        {text: "Ok",
         handler: res => {
          
         } 
        }
      ]
    });
    console.log("Erro");
    await mensagem.present();
    console.log("Erro");
  }
  voltar(){
    this.nav.navigateForward("home");
  }
}

