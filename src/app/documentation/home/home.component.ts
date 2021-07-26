import { Component, OnInit } from '@angular/core';
import {CommonServiceService  } from '../../common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appointments ;
  patients ;

  constructor(public commonService:CommonServiceService) { }

  ngOnInit(): void { }
  
}