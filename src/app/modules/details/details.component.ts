import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../home/components/shared/book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  
  bookdetails:any={};
  id:number=0;
  book:any;
  books: any;
  cartCount:number=0;
  constructor(private route:ActivatedRoute,
    private bookService: BookService){
    this.id= Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
   this.book=this.bookService.getBooksId(this.id);
   console.log(this.book);
  }
  updateFavourite(event:any,id:number,status:boolean){
    debugger;
    event.stopPropagation();
    let toggleStatus=!status;
    this.books=this.bookService.updateFavourite(id,toggleStatus)
console.log(this.books);
  }
  updateCart(event:any,id:number,status:boolean){
    debugger;
    event.stopPropagation();
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
  
  
}