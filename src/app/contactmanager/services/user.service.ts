import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[];
  };

  constructor(private http: HttpClient) {
    this._users = new BehaviorSubject<User[]>([]);
    this.dataStore = { users: [] };
  }
 
  get users(): Observable<User[]>{
    return this._users.asObservable();
  }

  loadAll() {
    const usersUrl = 'api/users/users.json';

    return this.http.get<User[]>(usersUrl).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
       error => {
        console.log('failed to fetch');
      }
    );
  }
}
