import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { map, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any;

  constructor(private authService: AuthService, private router: Router) {
    this.form = {
      username: "",
      password: ""
    };
  }

  login(): void {
    this.authService.login({ email: this.form.username, password: this.form.password }).pipe(map((response) => {
      debugger
      localStorage.setItem("token", response.data);
      this.router.navigate(["/home"]);
    }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError('Login failed');
      })).subscribe();
  }
}
