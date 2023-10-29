import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
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
