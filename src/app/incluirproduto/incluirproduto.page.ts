import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-incluirproduto',
  templateUrl: './incluirproduto.page.html',
  styleUrls: ['./incluirproduto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IncluirprodutoPage implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

}
