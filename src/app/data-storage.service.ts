import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  cities: string[] = [
    'Paris',
    'New York',
    ' London',
    'Bangkok',
    'Hong Kong',
    'Dubai',
    'Singapore',
    'Rome',
    'Macau',
    'Istanbul',
    'Kuala Lumpur',
    'Delhi',
    'Dhaka',
    'Tokyo',
    'Antalya',
    'Mexico City',
    'Moscow',
    'Porto',
    'San Francisco',
    'Beijing',
    'Los Angeles',
    'Chicago',
    'Barcelona',
    'Abu Dhabi',
    'Amsterdam',
    'Madrid',
    'Sydney',
    'San Miguel de Allende',
    'Lisbon',
    'Vienna',
  ];

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    this.http
      .post(
        'https://selise-assessment-default-rtdb.firebaseio.com/users.json',
        user
      )
      .subscribe((response) => {
        console.log(response);
      }),
      (error) => {
        this.error.next(error.message);
      };
  }

  getCities(): string[] {
    return this.cities;
  }
}
