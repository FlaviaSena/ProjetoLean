import { Injectable } from '@angular/core';
import { collection, collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc,doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Produto {
  id?:string;
  bebida: string;
  endereco: string;
  nome:string;
  prato: string;
  telefone: string;

}
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  colecao: string = "produto";

  constructor(private firestore: Firestore) { }
  cadastrar (obj:any){
    const produtos = collection(this.firestore, this.colecao);
    return addDoc(produtos, obj);
  
  }
  listar(): Observable<Produto[]>{
    const produtos = collection(this.firestore, this.colecao);

    return collectionData(produtos, {idField: 'id'}) as Observable<Produto[]>;
  }
  buscar(id:any):Observable<Produto>{
    const produtos = doc(this.firestore, this.colecao + '/' +id);
    return docData(produtos, {idField: 'id'}) as Observable<Produto>

  }
  alterar(obj: any){
    const produto = doc(this.firestore, this.colecao + '/' +obj.id);
    return updateDoc(produto, {
      bebida:obj.bebida, endereco:obj.endereco, nome:obj.nome, prato: obj.prato, telefone:obj.telefone
    });
  }
}
