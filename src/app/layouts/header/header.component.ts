import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/modules/home/components/shared/book.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Input() snav:any;

   cartCount:number;
   constructor(private bookService:BookService){
    this.cartCount=this.bookService.cartCount;
   }
  ngOnInit(): void {
    this.bookService.subject$.subscribe(val=>{
      this.cartCount=val;
    });
  }

}
