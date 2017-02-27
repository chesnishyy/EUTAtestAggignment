import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";


@Component({
  selector: 'login-form',
  templateUrl: 'app/login-form.component.html'
})
export class LoginFormComponent {

  form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
  });

  constructor(private _router: Router, private _loginService: LoginService) {

  }

  login(){
    if(this.form.valid){
      this._loginService.username = this.form.value.username;
      this._router.navigate(['/user']);
    }
  }
}
