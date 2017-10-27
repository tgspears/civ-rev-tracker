import { Component, Input } from '@angular/core';

@Component({
  selector: 'crt-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})

export class CRTNavComponent {

  loggedIn: boolean;
  showConfirmPasswordField: boolean;

  constructor() {
    this.loggedIn = false,
    this.showConfirmPasswordField = false
  }

  logInOut() {
    this.loggedIn = this.loggedIn === true ? false : true;
  }

  signUpShowHide() {
    this.showConfirmPasswordField = this.showConfirmPasswordField === true ? false : true;
  }

}