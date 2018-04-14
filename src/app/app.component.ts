import {Component, OnInit} from '@angular/core';

import {NavigationService} from './core/services';

import {AuthService} from './auth/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private autSvc: AuthService, private navigationSvc: NavigationService) {
  }

  ngOnInit() {
    $(document).foundation();
  }

  doLogout() {
    this.autSvc.logout();
    this.navigationSvc.goToHome();
  }
}
