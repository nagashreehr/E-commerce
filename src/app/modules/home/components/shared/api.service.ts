import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ROOT_URL = environment.base_url;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  postRequest(url: string, body = {}): Observable<any> {
    return this.http.post(`${this.ROOT_URL}${url}`, body);
  }

  getRequest(url: string): Observable<any> {
    this.spinner.show();
     return this.http.get(`${this.ROOT_URL}${url}`)
    //  return this.http.get(`${this.ROOT_URL}${url}`).pipe(
    //  map((response: any) => {
    //     let books = [];
    //    for (let key in response) {
    //     response[key].id = key;
    //        books.push(response[key])
    //     }
    //     this.spinner.hide();
    //     return books;
    //    }));
  }

  putRequest(url: string, id: number, body = {}): Observable<any> {
    return this.http.put(`${this.ROOT_URL}${url}/${id}`, body);
  }

  deleteRequest(url: string, id: number): Observable<any> {
    return this.http.delete(`${this.ROOT_URL}${url}/${id}`);
  }
   getRequestById(url: string, id: number): Observable<any> {
    return this.http.get(`${this.ROOT_URL}${url}/${id}`);
  }

}

