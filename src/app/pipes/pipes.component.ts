import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  demoObject: object = {
    pseudo: "Roger",
    birthDate: "10/10/2010"
  }
}
