import { Component, Input } from '@angular/core';

@Component({
  selector: 'crt-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
  //, animations: [
  //   trigger('loginState', [
  //     state('loggedIn', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('!loginState', style([
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     ])),
  //     transition('loggedIn => !loggedIn', animate('100ms ease-in')),
  //     transition('!loggedIn => loggedIn', animate('100ms ease-out'))
  //   ])
  // ]
})

export class CRTNavComponent {

  loggedIn: boolean = false;
  showConfirmPasswordField: boolean = false;

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  signUpShow() {
    this.showConfirmPasswordField = false;
  }

  signUpHide() {
    this.showConfirmPasswordField = true;
  }

}