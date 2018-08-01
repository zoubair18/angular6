import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { ScrappingService } from '../../../../services/scrapping.service';
import { UserAssurance } from '../../../../model/userAssurance';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login-ass.component.html',
  styleUrls: ['login-ass.component.scss']
})
export class LoginAssComponent implements OnInit {

  private userAssurance: UserAssurance;

  constructor(private _rotuer: Router, private _scrappingService: ScrappingService) { }

  ngOnInit() {
    this.userAssurance = this._scrappingService.getter();
  }

  processForm() {
    this._scrappingService.login(this.userAssurance).subscribe();
  }

}
