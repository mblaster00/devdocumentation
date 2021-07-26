import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments;
  userId: string;
  token: string;
  bodyResponse: any;
  infoUser: any;
  secret: string = " ";

  constructor(
    private userService: UsersService
  ) {
    this.token = localStorage.getItem('x-access-token');
    this.userId = localStorage.getItem('current_user');
    this.getMyinfos(); 
  }

  ngOnInit(): void {}

  getMyinfos() {
    this.userService.getMyInfos(this.userId).subscribe(res => {
      this.infoUser = res;
    }, err => {
      console.log(err)
    })
  }

  generateKey() {
    let data = {
      userId: this.userId,
      token: this.token
    }
    this.userService.getApiKey(data).subscribe(res => {
      this.bodyResponse = res;
      this.secret = this.bodyResponse.data.secretToken
    }, err => {
      console.log(err)
    })
  }
}
