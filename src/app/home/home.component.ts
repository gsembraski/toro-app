import { Component } from '@angular/core';
import PersonBalance from '../types/person-balance';
import { PersonService } from '../core/services/person.service';
import { map, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  item: PersonBalance | null = null;
  
  constructor(private personService: PersonService) {
    this.personService.getWallet().pipe(map((response) => {
      this.item = response.data;
    }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError('Login failed');
      })).subscribe();
  }
}
