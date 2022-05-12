import { Injectable } from '@angular/core';

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
  constructor() {}

  getCities(): string[] {
    return this.cities;
  }
}
