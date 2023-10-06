import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-example-output',
  templateUrl: './example-output.component.html',
  styleUrls: ['./example-output.component.css']
})
export class ExampleOutputComponent {
  @Output() mailCreated : EventEmitter<string> = new EventEmitter<string>();

  sendMail(mail: string) {
    this.mailCreated.next(mail);
  }
}
