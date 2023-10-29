import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  mail = "";
  password = "";

  onKey(event: any){
    this.password += event.target.value;
    console.log(this.mail)
  }
  //Register Fetch
   handleSubmit(){
   
  }

}
