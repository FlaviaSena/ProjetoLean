import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CadastroPage implements OnInit {
  credencial!:FormGroup;

  constructor(private service: AutenticacaoService, private fb: FormBuilder,private nav: NavController) { }

  ngOnInit() {
    this.credencial = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      senha:['',[Validators.required, Validators.minLength]]
    })
  }

  async cadastro(){
    console.log(this.credencial.get('email')?.value);
    console.log(this.credencial.get('senha')?.value);
    const user = await this.service.cadastro(this.credencial.get('email')?.value, this.credencial.get('senha')?.value);
    if(user){
      this.nav.navigateForward("interno");
    } else{
      console.log("Erro");
    }
  }

}
