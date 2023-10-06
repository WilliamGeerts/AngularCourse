import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../services/user";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit{

  users : User[] = [];
  size: number = 0;
  constructor(private _userService:UserService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  private getUsers() {
    this._userService.getUser().subscribe(users => this.users = users)
  }

  alertMail(mail: string){
    alert(mail);
  }
}
