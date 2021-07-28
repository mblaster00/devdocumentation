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
        private userService: UsersService,
        private elementRef: ElementRef, private renderer: Renderer2
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

    addHeader() {
        this.parameterName = $(`.myselect option:selected`).val();
        this.parameterValue = $(`.myselect input`).val();
        $("#parameter").html(`${this.parameterName} : ${this.parameterValue}`);
    }

    addParameter() {
        let removeButton = $("<div class=\"col-md-3\" style=\"padding: 4px 6px;\" data-bind=\"ifnot: required\"><button style=\"color: #31708f; font-size: 14px; border-radius: 0;\" class=\"btn btn-link\" type=\"button\" id=\"removeParameter\"><i class=\"fa\">&#xf00d;</i> Remove parameter</button></div>");
        this.elementRef.nativeElement = format.html.fieldWrapper();
        $("#buildyourform:last").append(this.elementRef.nativeElement);
        $("#buildyourform:last .row:last").append(removeButton);
        removeButton.click(function () {
            $(this).parent().remove();
            $("#parameter").empty();
        });
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
