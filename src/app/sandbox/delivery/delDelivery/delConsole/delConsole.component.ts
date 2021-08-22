import { DeliveryService } from 'src/services/delivery.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as format from "src/app/console.format";
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-delConsole',
    templateUrl: './delConsole.component.html',
    styleUrls: ['./delConsole.component.css']
})
export class DelConsoleComponent implements OnInit {

    constructor(
        private deliveryService: DeliveryService
    ) { }

    ngOnInit() {
    }

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    deliveryId: string;
    secret: string = localStorage.getItem('secret-token');
    bodyRequest: Object;
    values: string;
    bodyResponse: any;
    domain: string = environment.apiUrl

    delDelivery(event: any) {
        this.deliveryId = event.target.value;
    }

    getToken(event: any) {
        this.secret = event.target.value;
    }

    Submit() {
        let selector = $(".panel:last #httpResponse")
            if (selector.length != 0)
                selector.empty()
        let data = {
            deliveryId: this.deliveryId,
            secret: this.secret
        }
        this.deliveryService.deleteDelivery(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.read(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.error(err));
        })
    }
}
