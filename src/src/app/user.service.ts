import { Injectable } from '@angular/core';
import {User} from './user';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }

  public getUsers(): any {
     return this.http.get(`http://localhost:3000`);
  }

  public postUser(user: User): any{
    return this.http.post(`http://localhost:3000`, user);
  }

  public putUsers(user: User): any{
  return this.http.put(`http://localhost:3000/${user._id}`, user);
  }

  public deleteUser(_id: string): any{
    return this.http.delete(`http://localhost:3000/${_id}`);
  }
}
