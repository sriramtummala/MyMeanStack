import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsers();
  }


  public getUsers(): void{
    this.userService.getUsers().subscribe((res) => {
      this.userService.users = res as User[];
    });
  }

  public postUser(form: NgForm): void{
    if (form.value._id){
      this.userService.postUser(form.value).subscribe((res) => {
        this.getUsers();
        this.userService.selectedUser = new User();
      });
    } else{
      this.userService.putUsers(form.value).subscribe((res) => {
        this.getUsers();
        this.userService.selectedUser = new User();
      });
    }
  }

  public editUser(user: User): void {
    this.userService.selectedUser = user;
  }

  public deleteUser(_id: string): void {
    this.userService.deleteUser(_id).subscribe((res) => {
      this.getUsers();
      this.userService.selectedUser = new User();
    });
  }
}
