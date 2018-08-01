import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements  OnInit {
  private user: User;
  constructor(private _rotuer: Router, private _userService: UserService) { }

  ngOnInit() {
    this.user = this._userService.getter();
  }

  processForm() {
    if (this.user.id == undefined) {
      this._userService.createUser(this.user).subscribe((user) => {
        console.log(user);
        this._rotuer.navigate(['/activation']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this._userService.updateUser(this.user).subscribe((user) => {
        console.log(user);
        this._rotuer.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
