import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:8000/det/"
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getDetails(): Observable<any>{
    return this.http.get(this.url,{ headers : this.httpHeaders });
  }

  createdetail(details): Observable<any> {
    const ob = {firstName : details.firstName, lastName : details.lastName, email : details.email, phone : details.phone, addressLine1 : details.addressLine1, 
      addressLine2 : details.addressLine2 , city : details.city , pin : details.pin , state: details.state };
    return this.http.post(this.url, ob,
    { headers : this.httpHeaders });
  }

}
 