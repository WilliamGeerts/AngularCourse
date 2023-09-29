import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form: FormGroup = this._fb.group(
    {
      name : ['', [Validators.required, Validators.minLength(3)]],
      grade : [ '', Validators.required],

    }
  );

  constructor(private _fb:FormBuilder) {

  }
  get controlName(): AbstractControl{
    return this.form.controls['name'];
  }


  log() {
    console.log(this.form.value);

  }
}
