import { Injectable } from '@angular/core';
import{Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private auth: Auth) { }

  cadastro(email:any, senha:any){

  console.log(email);
  console.log(senha);    
    const usuario = createUserWithEmailAndPassword(
     this.auth,email, senha);
      return usuario;
  }

  logar(email:any, senha:any){
    const usuario = signInWithEmailAndPassword(this.auth, email, senha) ;   
    return usuario;
  }

  sair(){
    return signOut(this.auth);
  }
}
