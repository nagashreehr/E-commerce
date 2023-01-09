import { Component } from '@angular/core';
import { ApiService } from '../../home/components/shared/api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  reactiveForm: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    // this.reactiveForm();
    // this.apiService .getRequest('book.json', this.get).subscribe((sResponse) => {
    //   console.log(sResponse);
    // });
  }
}
