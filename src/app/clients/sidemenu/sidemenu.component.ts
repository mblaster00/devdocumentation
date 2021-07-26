import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name;
  constructor(
    private router: Router,
    public commonService: CommonServiceService
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login-page').then(() => {
      window.location.reload();
    });
  }

  navigate(name) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
