import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Cadastrocliente, CadastroclienteService } from 'src/app/servicos/cadastrocliente.service';



@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroclientePage implements OnInit {
  cadastrocliente: Cadastrocliente[] = [];

  constructor( private service: CadastroclienteService, private nav: NavController) { }

  ngOnInit() {
    this.service.listar().subscribe(res => {
      this.cadastrocliente = res;
      console.log(this.cadastrocliente);
    });
    
  }
  novo(){
this.nav.navigateForward("cadastrarcliente");
  }
  iniciarEdicao(id:any){
this.nav.navigateForward(["cadastrocliente",{idcadastrocliente:id}]);
  }

}
