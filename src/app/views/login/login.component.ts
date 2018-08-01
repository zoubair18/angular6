import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loading = true;
  private user: User;
  private users: User[];

  constructor(private _rotuer: Router, private _userService: UserService) { }

  ngOnInit() {
    this.user = this._userService.getter();
  }

  processForm() {
    this._userService.getUsers()
      .subscribe(data => {
        // alert('News Success');
        this.users = data;
        console.log(this.users.find(u => u.email === this.user.email &&
          u.password === this.user.password));

        if (this.users.find(u => u.email === this.user.email && u.password === this.user.password)) {
         /// console.log('Welcome');
          // alert('Bienvenue');
          this._rotuer.navigate(['/']);
        }
        else{
          alert('Email ou mot de passe incorrect');
        }
      },
        error => {
          alert('Merci de vérifier votre connection vers le Backend.');
        });
  }
}
