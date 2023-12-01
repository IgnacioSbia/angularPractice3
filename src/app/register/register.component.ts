import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  

  mail = "";
  password = "";

  onKeyMail(event: any){
    this.mail += event.target.value;
    console.log(this.mail)
  }
  onKeyPassword(event: any){
    this.password += event.target.value;
    console.log(this.password)
  }
  //Register Fetch
   async handleSubmit(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const user = {
      mail: this.mail,
      password: this.password
    };

    var requestOptions:object = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: 'follow'
    };

    await fetch("http://localhost:8000/api/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

}
