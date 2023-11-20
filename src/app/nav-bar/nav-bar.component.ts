import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  login = false;
  register = false;
  focusPage = 'focused';
  clickLogin(){
    if(!this.login){
    this.login = true;
    this.focusPage = 'notFocused';
  }
  }
  clickRegister(){
    if(!this.register){
      this.register = true;
      this.focusPage = 'notFocused'
    }
  }
}
