import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc } from '@angular/fire/firestore';

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
