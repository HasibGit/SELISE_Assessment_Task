import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.dataStorageService.hasData()) {
      this.dataStorageService.fetchUsers();
    }
  }
}
