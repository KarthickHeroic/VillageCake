import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user = {
    email: '',
    password: ''
  };

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
alert("Ok");
       // this.router.navigate(['dashboard']);
      })
      .catch((err) => 
      
      {
        console.log('error: ' + err)
      });
  }


  //   CreateUserID() {
  //     this.authService.CreateUser(this.user.email, this.user.password)
  //     .then((res) => {
  //       console.log(res);
  //       alert("Created");
  //       // this.router.navigate(['dashboard']);
  //     })
  //     .catch((err) => {
  //       console.log('error: ' + err)
  //     });
  // }

  ngOnInit() {
  }
  

}


