import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
   `
   #content {
    display:flex;
    flex-direction: column;
   }
   `
  ]
})
export class LoginPageComponent {

  constructor(
     private authService: AuthService,
     private router: Router


    ){}

  onLogin():void {
    this.authService.login('gevisa82@hotmail.com','aSDffdfd.asdaERE.afda')
     .subscribe( user => {
        this.router.navigate(['/']);
     });

  }

}
