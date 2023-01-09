import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ROOT_URL = environment.base_url;
  constructor(private http: HttpClient) {}
  postRequest(this: any, url: string, body: {}): Observable<any> {
    return this.http.post(`${this.ROOT_URL}${url}`, body);
  }
  getRequest(this: any, url: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}${url}`);
  }
}
