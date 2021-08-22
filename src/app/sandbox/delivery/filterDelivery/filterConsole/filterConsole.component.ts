import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DeliveryService, } from 'src/services/delivery.service';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { environment } from 'src/environments/environment';
declare var $: any;


@Component({
    selector: 'app-requestConsole',
    templateUrl: './filterConsole.component.html',
    styleUrls: ['./filterConsole.component.css']
})
export class FilterConsoleComponent implements OnInit {

    constructor(
        private deliveryService: DeliveryService,
        private elementRef: ElementRef, private renderer: Renderer2
    ) { }

    ngOnInit() {
    }

    parameterName: string;
    parameterValue: string;
    startValue: string;
    endValue: string;
    limitValue: string;
    contentType: string = "application/json";
    secret: string = " ";
    bodyResponse: any;
    domain: string = environment.apiUrl
    nbreParams: number = 0;

    getToken(event: any) {
        this.secret = event.target.value;
    }

    checkType(select, type) {
        if (select == 'startDate') {
            $(`#${type} input`).attr('type', 'date');
        }
        else if (select == 'endDate') {
            $(`#${type} input`).attr('type', 'date');
        }
        else if (select == 'limit') {
            $(`#${type} input`).attr({ "type" : "number", "min" : 1, "max" : 100 });
        }
    }

    getParams(idParams) {
        this.parameterName = $(`#${idParams} option:selected`).val();
        this.parameterValue = $(`#${idParams} input`).val();
        if (this.parameterName == 'startDate') {
            $("#startDate").html(`/${this.parameterValue}`);
        }
        else if (this.parameterName == 'endDate') {
            $("#endDate").html(`/${this.parameterValue}`);
        }
        else if (this.parameterName == 'limit') {
            $("#limit").html(`/${this.parameterValue}`);
        }
    }

    addParameter() {
        let that = this
        this.nbreParams++;
        let removeButton = $("<div class=\"col-md-3\" style=\"padding: 4px 6px;\" data-bind=\"ifnot: required\"><button style=\"color: #31708f; font-size: 14px; border-radius: 0;\" class=\"btn btn-link\" type=\"button\" id=\"removeParameter\"><i class=\"fa\">&#xf00d;</i> Remove parameter</button></div>");
        this.elementRef.nativeElement = format.html.deliveryParams(this.nbreParams);
        $("#buildyourform:last").append(this.elementRef.nativeElement);
        $("#buildyourform:last .row:last").append(removeButton);
        removeButton.click(function () {
            let idParams = $(`#${$(this).parent().attr('id')} option:selected`).val();
            $(this).parent().remove();
            $(`#${idParams}`).empty();
            that.nbreParams--;
            that.elementRef.nativeElement = format.html.deliveryParams(that.nbreParams);
            that.parameterName = $(`#myselect${that.nbreParams} option:selected`).val();
        });
        this.elementRef.nativeElement.keyup(function () {
            let idParams = $(this).attr('id');
            that.getParams(idParams);
        });
        this.elementRef.nativeElement.change(function () {
            let idParams = $(this).attr('id');
            let select = $(`#${idParams} option:selected`).val();
            that.checkType(select, idParams);

            let listId = [];
            for (let index = 1; index <= that.nbreParams; index++) {
                let value = $(`#myselect${index} option:selected`).val();
                listId.push(value);
            }
            $('.parameter').not(`#${listId[0]}`).not(`#${listId[1]}`).not(`#${listId[2]}`).empty();
            that.getParams(idParams);
        });
    }

    checkValue() {
        for (let index = 1; index <= this.nbreParams; index++){
            let value = $(`#myselect${index} #params option:selected`).val();
            if (value == 'startDate') {
                this.startValue = $(`#myselect${index} input`).val();
            }
            else if (value == 'endDate') {
                this.endValue = $(`#myselect${index} input`).val();
            }
            else if (value == 'limit') {
                this.limitValue = $(`#myselect${index} input`).val();
            }
        }
    }

    async Submit() {
        let selector = $(".panel:last #httpResponse")
        if (selector.length != 0)
            selector.empty()
        await this.checkValue()
        let data = {
            secret: this.secret,
            startDate: this.startValue,
            endDate: this.endValue,
            limit: this.limitValue
        }
        await this.deliveryService.filterDelivery(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.read(this.bodyResponse));
        }, err => {
            console.log(err)
        })
    }
}
