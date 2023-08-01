import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private isAuthenticated = false;
  private apiRoute = `${environment.apiUrl}/user`

  login(data: any) {
    return this.http.post<any>(`${this.apiRoute}/authenticate`, data);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
}
