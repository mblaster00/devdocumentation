import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(
        public commonService: CommonServiceService
    ) { }

    ngOnInit() {  }
}
