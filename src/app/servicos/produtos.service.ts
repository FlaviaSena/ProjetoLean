import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  colecao: string = "produto"

  constructor(private firestore: Firestore) { }
  cadastrar (obj:any){
    const produtos = collection(this.firestore, this.colecao);
    return addDoc(produtos, obj);
  
  }
}
