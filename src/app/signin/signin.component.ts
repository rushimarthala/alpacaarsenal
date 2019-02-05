import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SignIn} from './signin';
import {SignInService} from './signin.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signin = new SignIn();
  users: any[];
  valid = true;
  isLoggedIn = 'false';
  

  constructor(private router: Router, private signInService: SignInService) { 
    document.getElementById('login').style.display = 'none';
    this.signInService.getUsers()
    .subscribe(users => this.users = users);
  }

  onSubmit() {
    this.valid = true;
    const name = this.signin.username;
    sessionStorage.setItem('username', this.signin.username);
    const password = this.signin.password;
    const user = this.users.filter(currUser => currUser.userName === name && currUser.password === password)[0];
    if (user) {
        this.isLoggedIn = 'true';
        sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
        this.router.navigate(['/products']);
    } else {
        this.isLoggedIn = 'false';
        sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
        this.valid = false;
    }
}
}
