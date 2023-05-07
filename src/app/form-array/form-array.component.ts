import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  Details = new FormGroup({
    name : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required]),
    skills : new FormArray([
        new FormControl("",[Validators.required]),
        new FormControl("",[Validators.required]),
        new FormControl("",[Validators.required])
    ])

  });

  details()
  {
    console.warn(this.Details.value);
  }

  get name()
  {
    return this.Details.get('name')
  }

  get age()
  {
    return this.Details.get('age')
  }

  get skills()
  {
    return this.Details.get('skills')
  }

  addskill()
  {
      this.Details.controls.skills.push(new FormControl(null))
  }
}
