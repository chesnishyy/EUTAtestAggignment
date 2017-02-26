import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login-form.component.html'
})
export class LoginFormComponent {

  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login(){
    console.log(this.form.value)
  }
}
