import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user.model';
import { catchError, map, Subject, throwError } from 'rxjs';

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

  users: User[];

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

  fetchUsers() {
    this.http
      .get<{ [key: string]: User }>(
        'https://selise-assessment-default-rtdb.firebaseio.com/users.json'
      )
      .pipe(
        map((response) => {
          const usersArray = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              usersArray.push({ ...response[key], id: key });
            }
          }
          return usersArray;
        })
      )
      .subscribe((response) => {
        this.users = response;
      });
  }

  getUsers(): User[] {
    return this.users;
  }

  hasData() {
    if (this.users) {
      return true;
    }
    return false;
  }

  getCities(): string[] {
    return this.cities;
  }
}
