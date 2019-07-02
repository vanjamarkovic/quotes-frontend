import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(data => {
      if (data.status == 0) {
        //debugger; // Break point u kodu
        console.log(data.token);
        localStorage.setItem('quotes-token', data.token);
        this.router.navigateByUrl(''); // Redirekcija na pocetnu stranu
      }
    })
  }

}
