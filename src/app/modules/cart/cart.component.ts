import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../home/components/shared/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // providers:[BookService]
})
export class CartComponent {
  books:any;
  book: any;
  cartCount:number;
  constructor(private bookService:BookService,private router:Router){
    this.books=bookService.CartBooks();
    this.cartCount=bookService.cartCount;
    console.log(this.books);
  }
  BookDetail(id:number){
    this.router.navigate(['/details',id])
  }
  
  updateCart(event:any,id:number,status:boolean){
    debugger;
    event.stopPropagation();
    let toggleStatus=!status;
    this.books=this.bookService.updateCart(id,toggleStatus)
    this.books=this.bookService.CartBooks();
    this.cartCount--;
    this.bookService.setCartCount(this.cartCount);

console.log(this.books);
  }

}
