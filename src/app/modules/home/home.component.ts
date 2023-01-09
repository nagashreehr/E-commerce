import { Component } from '@angular/core';
import { BookService } from './components/shared/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [BookService]
})
export class HomeComponent {
  books: any; 
  constructor(private book:BookService){
    this.books=this.book.getBooks();

  }
 
}
