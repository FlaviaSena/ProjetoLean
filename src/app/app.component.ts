import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private nav: NavController) {}

  func1(){
    console.log("Função 1");
  }

  cadastro(){
    this.nav.navigateForward("cadastro");
  }

  login(){
    this.nav.navigateForward("login");
  }
}
