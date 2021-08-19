import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { QuotationsService, } from 'src/services/quotations.service';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-requestConsole',
    templateUrl: './filterConsole.component.html',
    styleUrls: ['./filterConsole.component.css']
})
export class FilterConsoleComponent implements OnInit, AfterViewInit {
    @ViewChild("editor") private editor: ElementRef<HTMLElement>;

    constructor(
        private quotationService: QuotationsService,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit() { }

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    bodyRequest: Object;
    secret: string = " ";
    bodyResponse: any;
    domain: string = environment.apiUrl
    nbreParams: number = 0;

    ngAfterViewInit(): void {
        ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
        const aceEditor = ace.edit(this.editor.nativeElement);
        aceEditor.setTheme('ace/theme/twilight');
        aceEditor.session.setMode("ace/mode/javascript");
        aceEditor.on("change", () => {
            this.bodyRequest = aceEditor.getValue()
        });
    }

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
        else if (select == 'status') {
            $(`#${type} input`).attr('type', 'text');
        }
        else if (select == 'idUser') {
            $(`#${type} input`).attr('type', 'text');
        }
        else if (select == 'limit') {
            $(`#${type} input`).attr('type', 'number');
        }
    }

    getParams() {
        if (this.parameterName == 'startDate') {
            $("#startDate").html(`${this.parameterName} : ${this.parameterValue}<br>`);
        }
        else if (this.parameterName == 'endDate') {
            $("#endDate").html(`${this.parameterName} : ${this.parameterValue}<br>`);
        }
        else if (this.parameterName == 'status') {
            $("#status").html(`${this.parameterName} : ${this.parameterValue}<br>`);
        }
        else if (this.parameterName == 'idUser') {
            $("#idUser").html(`${this.parameterName} : ${this.parameterValue}<br>`);
        }
        else if (this.parameterName == 'limit') {
            $("#limit").html(`${this.parameterName} : ${this.parameterValue}`);
        }
    }

    addParameter() {
        let that = this
        this.nbreParams++;
        let removeButton = $("<div class=\"col-md-3\" style=\"padding: 4px 6px;\" data-bind=\"ifnot: required\"><button style=\"color: #31708f; font-size: 14px; border-radius: 0;\" class=\"btn btn-link\" type=\"button\" id=\"removeParameter\"><i class=\"fa\">&#xf00d;</i> Remove parameter</button></div>");
        this.elementRef.nativeElement = format.html.addParams(this.nbreParams);
        $("#buildyourform:last").append(this.elementRef.nativeElement);
        $("#buildyourform:last .row:last").append(removeButton);
        removeButton.click(function () {
            let idParams = $(`#${$(this).parent().attr('id')} option:selected`).val();
            $(this).parent().remove();
            $(`#${idParams}`).empty();
            that.nbreParams--;
            that.elementRef.nativeElement = format.html.addParams(that.nbreParams);
            that.parameterName = $(`#myselect${that.nbreParams} option:selected`).val();
        });
        this.elementRef.nativeElement.keyup(function () {
            let idParams = $(this).attr('id');
            that.parameterName = $(`#${idParams} option:selected`).val();
            that.parameterValue = $(`#${idParams} input`).val();
            that.getParams();
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
            $('.parameter').not(`#${listId[0]}`).not(`#${listId[1]}`).not(`#${listId[2]}`).not(`#${listId[3]}`).empty();

            that.parameterName = $(`#${idParams} option:selected`).val();
            that.parameterValue = $(`#${idParams} input`).val();
            that.getParams();
        });
    }

    Submit() {
        let selector = $(".panel:last #httpResponse")
        if (selector.length != 0)
            selector.empty()
        let data = {
            secret: this.secret,
            body: this.bodyRequest
        }
        this.quotationService.requestQuote(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.quotation(this.bodyResponse));
        }, err => {
            console.log(err)
        })
    }
}
