import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../user';



@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  model = new User(18, 'Bryan', 'Kulczycki', 'Ninja');

  submitted = false;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }



  onSubmit() {
    console.log(this.model.firstName + ' ' + this.model.lastName);
    this.submitted = true;}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
