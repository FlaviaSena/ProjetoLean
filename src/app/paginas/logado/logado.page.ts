import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.page.html',
  styleUrls: ['./logado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LogadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
}
