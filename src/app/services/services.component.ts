import {Component, OnInit} from '@angular/core';
import {CounterService} from "./counter.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  ngOnInit(): void {
    this.getUsers();
  }
  users: any;
  constructor(private _counter: CounterService, private _userService: UserService) {
  }

  increment(){
    this._counter.increment()
  }

  getUsers(){
    this._userService.getUser().subscribe(usersFromServer =>this.users = usersFromServer)
  }

}
