import { Component } from "@angular/core";
import {LoginService} from "./login.service";

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar.component.html'
})
export class NavbarComponent {

    constructor(private _loginService: LoginService){
    }

    username = this._loginService.username;

}
