import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../home/components/shared/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {

  AddBookForm: FormGroup;
  post: any;
  currentBookId: any;
  books: any;
  submit: boolean = false;
  imageURL: string;
  preview: any;

  constructor(private apiService: ApiService, private toastr: ToastrService, private activeRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.AddBookForm = new FormGroup({
      book_name: new FormControl(null, [Validators.required]),
      book_genre: new FormControl(null, [Validators.required]),
      book_description: new FormControl(null, [Validators.required]),
      book_author: new FormControl(null, [Validators.required]),
      book_price: new FormControl(null, [Validators.required]),
      book_image: new FormControl(null)
    });
    this.currentBookId = this.activeRoute.snapshot.paramMap.get('id');
    if (this.currentBookId) {
      this.apiService.getRequestById('books', this.currentBookId).subscribe((sResponse) => {
        this.books = sResponse.data;
        this.AddBookForm.patchValue({
          book_name: this.books.book_name,
          book_genre: this.books.book_genre,
          book_image: this.books.book_image,
          book_description: this.books.book_description,
          book_author: this.books.book_author,
          book_price: this.books.book_price,
        })
        this.preview = this.sanitize(this.books.book_image);
      })
    }
  }
  ngOnInit(): void {
  }
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.AddBookForm.patchValue({
      book_image: file
    });
    // this.AddBookForm.get('book_image').updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  onSubmitClick(post: any) {
    this.submit = true;
    if (this.AddBookForm.invalid) {
      return
    }
    else {
      console.log(this.AddBookForm.value);
    }

    this.post = post;
    if (!this.currentBookId) {

      let postData = JSON.parse(JSON.stringify(this.AddBookForm.value));
      delete postData.book_image;
      let formData = new FormData();
      formData.append('book_image', this.AddBookForm.value.book_image);
      formData.append('payload', JSON.stringify(postData));

      this.apiService
        .postRequest('books/', formData).subscribe((sResponse) => {
          console.log(sResponse);
          debugger
          this.toastr.success('Book added successfully');
          this.router.navigate(['products']);
        },
          error => {
            this.toastr.error('Something went wrong', 'Try again....');
          }
        );

    }
    else {
      let postData = JSON.parse(JSON.stringify(this.AddBookForm.value));
      delete postData.book_image;

      let formData = new FormData();
      formData.append('book_image', this.AddBookForm.value.book_image);
      formData.append('payload', JSON.stringify(postData));

      this.apiService
        .putRequest('books/', this.currentBookId, formData)
        .subscribe((sResponse) => {
          console.log(sResponse);
          this.toastr.success('Book updated successfully');
          this.router.navigate(['products']);
        },
          error => {
            this.toastr.error('Something went wrong', 'Try again....')
          });
    }
  }

  getBooks() {
    this.apiService.getRequest('books').subscribe((sResponse) => {
      this.books = sResponse;
    })
  }
  reset() {
    this.AddBookForm.reset();
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}


