import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-example-two-way-binding',
  templateUrl: './example-two-way-binding.component.html',
  styleUrls: ['./example-two-way-binding.component.css']
})
export class ExampleTwoWayBindingComponent {
  @Input()  size: number = 0;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  increase() {
    this.sizeChange.next(++this.size);
  }

  decrease() {
    this.sizeChange.next(--this.size);
  }
}
