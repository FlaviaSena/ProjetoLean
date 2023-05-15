import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc,doc, updateDoc } from 'firebase/firestore';


export interface Compras {
  ids?:string;
  bebida: string;
  nome:string;
  prato: string;
  valor: string;
  quantidade: string;
  }

@Injectable({
  providedIn: 'root'
})


export class CarrinhoService {
  colecao: string = "listacompras";

  constructor(private firestore: Firestore) {}

    cadastrar (obj:any){
      const listacompras = collection(this.firestore, this.colecao);
      return addDoc(listacompras, obj);
    
    }

    listar(): Observable<Compras[]>{
      const listacompras = collection(this.firestore, this.colecao);
  
      return collectionData(listacompras, {idField: 'id'}) as Observable<Compras[]>;
    }

   

}
