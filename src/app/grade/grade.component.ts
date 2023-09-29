import { Component } from '@angular/core';
import {group} from "@angular/animations";

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent {
  myGrade:number = 17;
  firstHtml:string = "<b>Ok c'est un test</b>";
  red: boolean = true;
  textToChange:String = "Je suis rouge ! ";

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  protected readonly group = group;

  alertMe() {
    alert("Message bien recu");

  }

  inverserRouge() {
    this.red = !this.red;

  }

  nombreAlea() {
    let a: number = Math.random();
    this.numbers.push(a);

  }
}
