import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor() { }

  getUser(): Observable<User[]>{
    return of(
      [
        {
          pseudo: "Roger",
          mail: "roger@pro.be"
        },
        {
          pseudo: "Smourbif",
          mail: "smourbif@noob.fr"
        }
      ]
    ).pipe(delay(2000));

  }
}
