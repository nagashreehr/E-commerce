import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { books } from "./data";



@Injectable({
    providedIn:'root'
})
export class BookService{
    subject$=new Subject<number>();
  
  cartCount:number=0;

    consructor(){}

    setCartCount(count:number){
        this.cartCount=count;
        this.subject$.next( this.cartCount);

    }
    
getBooks(){
    return books;
}
getBooksId(id:any){
    let book
    books.map((element:any)=> element.id==id? book=element:{});
    return book;
}
FavouriteBooks(){
    let fav:any=[]
    debugger;
    books.map((element:any)=> element.fav==true? fav.push(element):null);
    return fav;
}
updateFavourite(id:number,status:boolean){
    debugger;
    books.map((element:any)=> element.id==id? element.fav=status:null);
    return books;
} 
CartBooks(){
    let cart:any=[]
    debugger;
    books.map((element:any)=> element.cart==true? cart.push(element):null);
    return cart;
}  
updateCart(id:number,status:boolean){
    books.map((element:any)=> element.id==id? element.cart=status:null);
    return books;
}   
}