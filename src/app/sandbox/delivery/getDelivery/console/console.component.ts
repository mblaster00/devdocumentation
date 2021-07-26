import { DeliveryService } from 'src/services/delivery.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as format from "src/app/console.format";
declare var $: any;


@Component({
    selector: 'app-getConsole',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

    constructor(
        private deliveryService: DeliveryService,
        private elementRef: ElementRef, private renderer: Renderer2
    ) { }

    ngOnInit() {}

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    deliveryId: string;
    secret: string = localStorage.getItem('secret-token');
    bodyRequest: Object;
    values: string;
    bodyResponse: any;

    getDelivery(event: any) {
        this.deliveryId = event.target.value;
    }

    getToken(event: any) {
        this.secret = event.target.value;
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
            deliveryId: this.deliveryId,
            secret: this.secret
        }
        this.deliveryService.getDelivery(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.getDelivery(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.Error(err));
        })
    }

}
