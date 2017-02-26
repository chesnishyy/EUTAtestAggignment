import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {UserComponent} from "./user.component";

@Component({
  selector: 'login-form',
  templateUrl: 'app/login-form.component.html'
})
export class LoginFormComponent {

  form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
  });

  constructor(private _router: Router) {

  }

  login(){
    if(this.form.valid){
      this._router.navigate(['/user'])
      console.log(this.form.value);
    }
  }
}
