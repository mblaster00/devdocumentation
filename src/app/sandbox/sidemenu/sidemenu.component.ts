import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from './../../common-service.service';
declare var $: any;

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
  ) { }

  ngOnInit(): void { }

  logout() {
    localStorage.clear();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/']);
  }

  navigate(name) {
    this.name = name;
    this.commonService.nextmessage(name);
  }

  user: boolean;
  userLevel = "down";
  quote: boolean;
  quoteLevel = "down";
  delivery: boolean;
  deliveryLevel = "down";
  toggle(event) {
    let id = $(event.target).attr('id')
    if (id == "users") {
      this.user = !this.user;
      (this.user) ? this.userLevel = 'up': this.userLevel = 'down';
    }
    if (id == "quotations") {
      this.quote = !this.quote;
      (this.quote) ? this.quoteLevel = 'up': this.quoteLevel = 'down';
    }
    if (id == "delivery") {
      this.delivery = !this.delivery;
      (this.delivery) ? this.deliveryLevel = 'up': this.deliveryLevel = 'down';
    }
  }
}
