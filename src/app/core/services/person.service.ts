import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem("token") || "";
  }

  private token:String;
  private apiRoute = `${environment.apiUrl}/person`

  getWallet() : Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(`${this.apiRoute}/wallet`,{headers});
  }
}
