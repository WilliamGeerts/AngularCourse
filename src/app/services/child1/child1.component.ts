import { Component } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  constructor(public counter: CounterService) {
  }


}
