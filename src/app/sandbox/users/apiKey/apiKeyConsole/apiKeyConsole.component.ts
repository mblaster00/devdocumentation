import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { UsersService } from 'src/services/users.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-apiKeyConsole',
    templateUrl: './apiKeyConsole.component.html',
    styleUrls: ['./apiKeyConsole.component.css']
})
export class ApiKeyConsoleComponent implements OnInit {
    
    constructor(
        private userService: UsersService
    ) { }

    ngOnInit() {}

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    userId: string = localStorage.getItem('current_user');
    token: string = localStorage.getItem('x-access-token');
    bodyRequest: Object;
    values: string;
    bodyResponse: any;
    domain: string = environment.apiUrl

    getuserId(event: any) {
        this.userId = event.target.value;
    }

    getToken(event: any) {
        this.token = event.target.value;
    }

    Submit() {
        let selector = $(".panel:last #httpResponse")
            if (selector.length != 0)
                selector.empty()
        let data = {
            userId: this.userId,
            token: this.token
        }
        this.userService.getApiKey(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.read(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.error(err));
        })
    }
}
