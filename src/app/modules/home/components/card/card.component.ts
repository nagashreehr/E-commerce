import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { BookService } from '../shared/book.service';
import { books } from '../shared/data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  books:any;
  preview:any;
  cartCount:number=0;
  constructor(private bookService:BookService,
    private router:Router,private apiService:ApiService,private sanitizer:DomSanitizer){
      // this.books=bookService.getBooks();
      this.cartCount=bookService.cartCount;
    }
    ngOnInit(){
      this.getBooks();
      debugger
      
    }
    BookDetail(id:number){
      this.router.navigate(['/details',id])
      
    }

    updateFavourite(event:any,id:number,status:boolean){
      debugger;
      event.stopPropagation();
      let toggleStatus=!status;
      this.books=this.bookService.updateFavourite(id,toggleStatus)
console.log(this.books);
    }

    updateCart(event:any,id:number,status:boolean){
      event.stopPropagation();
      debugger;
      let toggleStatus=!status;
      
      if(status ==false){
        this.cartCount++;
      }
      else{
        this.cartCount--; 
      }
      this.books=this.bookService.updateCart(id,toggleStatus)
    this.bookService.setCartCount(this.cartCount);
    }

    getBooks(){
      this.apiService.getRequest('books').subscribe((sResponse) => {
        debugger;
        this.books = sResponse.data;
      })
    }
    sanitize(url:string){
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}



