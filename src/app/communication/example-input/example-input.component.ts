import {Component, Input} from '@angular/core';
import {User} from "../../services/user";

@Component({
  selector: 'app-example-input',
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.css']
})
export class ExampleInputComponent {
  @Input() users: User[] = [];


}
