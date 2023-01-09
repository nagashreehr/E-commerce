import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../home/components/shared/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  reactiveForm: FormGroup;
  post: any;

  constructor(private apiService: ApiService) {
    this.reactiveForm = new FormGroup({
      book_name: new FormControl(null, [Validators.required]),
      book_genre: new FormControl(null, [Validators.required]),
      book_description: new FormControl(null, [Validators.required]),
      book_author: new FormControl(null, [Validators.required]),
      book_price: new FormControl(null, [Validators.required]),
    });
  }
  onSubmitClick(post: any) {
    this.post = post;
    this.apiService
      .postRequest('book.json', this.post)
      .subscribe((sResponse) => {
        console.log(sResponse);
      });
  }
  reset() {
    this.reactiveForm.reset();
  }
}
