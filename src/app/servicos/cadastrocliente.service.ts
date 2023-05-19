
import { Injectable } from '@angular/core';
import { collection, collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc,doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Cadastrocliente {
  id?:string;
  nome: string;
  telefone: string;
  cpf:string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  email: string;

}
@Injectable({
  providedIn: 'root'
})
export class CadastroclienteService {
  colecao: string = "cadastrocliente";

  constructor(private firestore: Firestore) { }
  cadastrar (obj:any){
    const cadastrocliente = collection(this.firestore, this.colecao);
    return addDoc(cadastrocliente, obj);
  
  }
  listar(): Observable<Cadastrocliente[]>{
    const cadastrocliente = collection(this.firestore, this.colecao);

    return collectionData(cadastrocliente, {idField: 'id'}) as Observable<Cadastrocliente[]>;
  }
  buscar(id:any):Observable<Cadastrocliente>{
    const cadastrocliente = doc(this.firestore, this.colecao + '/' +id);
    return docData(cadastrocliente, {idField: 'id'}) as Observable<Cadastrocliente>

  }
  alterar(obj: any){
    const cadastrocliente = doc(this.firestore, this.colecao + '/' +obj.id);
    return updateDoc(cadastrocliente, {
      nome:obj.nome, telefone:obj.telefone, cpf:obj.cpf, cep: obj.cep, rua:obj.rua, numero:obj.numero, bairro:obj.bairro, email:obj.email
    });
  }

  excluir(id: any){
    const cadastrocliente = doc(this.firestore, this.colecao +'/' +id);
    return deleteDoc(cadastrocliente);

  } 

}