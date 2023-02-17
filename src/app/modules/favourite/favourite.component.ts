import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../home/components/shared/book.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  // providers:[BookService]
})
export class FavouriteComponent {
  books: any;
  book: any;
  constructor(private bookService: BookService, private router: Router) {
    this.books = bookService.FavouriteBooks();
    console.log(this.books);
  }
  BookDetail(id: number) {
    this.router.navigate(['/details', id])
  }
  updateFavourite(event: any, id: number, status: boolean) {
    debugger;
    event.stopPropagation();
    let toggleStatus = !status;
    this.book = this.bookService.updateFavourite(id, toggleStatus)
    console.log(this.book);
  }
  updateCart(event: any, id: number, status: boolean) {
    event.stopPropagation();
    let toggleStatus = !status;
    this.book = this.bookService.updateCart(id, toggleStatus)
    console.log(this.book);
  }

}
