import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

private token=null;
  constructor() { }
  public setToken(token){
    this.token=token;
    debugger
    sessionStorage.setItem("token",token)
  }
  public getToken(){
    if(this.token){
      debugger  
      return this.token;
   
    }
    else{
      debugger
      return sessionStorage.getItem("token")
     
    }
    
  }
}
