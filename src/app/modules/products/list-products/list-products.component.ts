import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../home/components/shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})

export class ListProductsComponent {
  books: any;
  currentPage = 0;


  constructor(private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.apiService.getRequest('books').subscribe((sResponse) => {
      this.books = sResponse.data;
      console.log(sResponse);
    })
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
}

