import { QuotationsService } from './../../../../../services/quotations.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as format from "src/app/console.format";
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-getConsole',
    templateUrl: './getConsole.component.html',
    styleUrls: ['./getConsole.component.css']
})
export class GetConsoleComponent implements OnInit {

    constructor(
        private quoteService: QuotationsService
    ) { }

    ngOnInit() {
    }

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    quoteId: string;
    secret: string = localStorage.getItem('secret-token');
    bodyRequest: Object;
    values: string;
    bodyResponse: any;
    domain: string = environment.apiUrl

    getQuote(event: any) {
        this.quoteId = event.target.value;
    }

    getToken(event: any) {
        this.secret = event.target.value;
    }

    Submit() {
        let selector = $(".panel:last #httpResponse")
            if (selector.length != 0)
                selector.empty()
        let data = {
            quoteId: this.quoteId,
            secret: this.secret
        }
        this.quoteService.getQuote(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.read(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.error(err));
        })
    }

}
