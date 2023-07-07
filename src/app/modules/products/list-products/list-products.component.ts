import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../home/components/shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { DomSanitizer } from '@angular/platform-browser';
import { BookService } from '../../home/components/shared/book.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})

export class ListProductsComponent {
  books: any;
  currentPage = 0;
  preview: any;
  constructor(private apiService: ApiService,private bookService:BookService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  // getBooks() {
  //   this.apiService.getRequest('books').subscribe((sResponse) => {
  //     this.books = sResponse.data;
  //     debugger;
  //     console.log(sResponse);
  //   })

  // }


  getBooks(){
    this.books=this.bookService.getBooks();
    }

  deleteBooks(book: any) {
    let dialogControl = this.dialog.open(DeleteProductComponent);
    dialogControl.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteRequest('books', book.id).subscribe((sResponse) => {
          this.books = sResponse.data;
          this.toastr.success('Book deleted successfully');
          this.getBooks();
        })
      }
    });
  }
  editBooks(books: any) {
    console.log(books);
    this.router.navigate(['products/add-product', books.id])

  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

