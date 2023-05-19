import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Cadastrocliente, CadastroclienteService } from 'src/app/servicos/cadastrocliente.service';
import { ActivatedRoute } from '@angular/router';
import { AnyARecord } from 'dns';



@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroclientePage implements OnInit {
  cadastrocliente: Cadastrocliente[] = [];
  id: any;
  
  constructor( private service: CadastroclienteService, private nav: NavController,  private rota: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.rota.snapshot.params['idcliente'];
    


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

excluir(id:any){
  
  this.service.excluir(id);
}

}
