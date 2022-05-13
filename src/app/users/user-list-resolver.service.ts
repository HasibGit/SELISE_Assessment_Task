import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserListResolverService implements Resolve<User[]> {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.dataStorageService.fetchUsers();
  }
}
