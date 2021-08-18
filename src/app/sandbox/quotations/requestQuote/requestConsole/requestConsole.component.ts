import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { QuotationsService, } from 'src/services/quotations.service';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-requestConsole',
    templateUrl: './requestConsole.component.html',
    styleUrls: ['./requestConsole.component.css']
})
export class RequestConsoleComponent implements OnInit, AfterViewInit {
    @ViewChild("editor") private editor: ElementRef<HTMLElement>;

    constructor(
        private quotationService: QuotationsService,
        private elementRef: ElementRef,

        private param1: ElementRef,
        private param2: ElementRef,
        private param3: ElementRef,
        private param4: ElementRef,

        private renderer: Renderer2
    ) { }

    ngOnInit() { }

    startDate: string;
    startDateValue: string;
    endDate: string;
    endDateValue: string;
    status: string;
    statusValue: string;
    limit: string;
    limitValue: string;
    idUser: string;
    idUserValue: string;

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

        this.renderer.listen(this.elementRef.nativeElement, 'keyup', () => { this.addHeader(); });

        
        // this.renderer.listen(this.param1.nativeElement, 'keyup', () => { this.addHeader(1); });
        // this.renderer.listen(this.param2.nativeElement, 'keyup', () => { this.addHeader(2); });
        // this.renderer.listen(this.param3.nativeElement, 'keyup', () => { this.addHeader(3); });
        // this.renderer.listen(this.param4.nativeElement, 'keyup', () => { this.addHeader(4); });
    }

    getToken(event: any) {
        this.secret = event.target.value;
    }

    fillTable() {
        if (this.parameterName == 'startDate') {
            $("#startDate").html(`${this.parameterName} : ${this.parameterValue}`);
        }
        else if (this.parameterName == 'endDate') {
            $("#endDate").html(`${this.parameterName} : ${this.parameterValue}`);
        }
        else if (this.parameterName == 'status') {
            $("#status").html(`${this.parameterName} : ${this.parameterValue}`);
        }
        else if (this.parameterName == 'idUser') {
            $("#idUser").html(`${this.parameterName} : ${this.parameterValue}`);
        }
        else if (this.parameterName == 'limit') {
            $("#limit").html(`${this.parameterName} : ${this.parameterValue}`);
        }
    }

    addHeader() {
        //console.log('index ===>', index)
        console.log('nbre params en cours ===>', this.nbreParams)

        // console.log('element ref ===>', this.param1.nativeElement.length)
        // console.log('element ref ===>', this.param3.nativeElement.length)
        //console.log('element en ref ==>', this.elementRef.nativeElement)

        // if (index == 0) {
            this.parameterName = $(`#myselect${this.nbreParams} option:selected`).val();
            this.parameterValue = $(`#myselect${this.nbreParams} input`).val();
        // }
        // else {
        // this.parameterName = $(`#myselect${index} option:selected`).val();
        // this.parameterValue = $(`#myselect${index} input`).val();
        //}

        console.log('element selected ====>', this.parameterName)
        console.log('element value ====>', this.parameterValue)

        this.fillTable();
    }

    addParameter() {
        let that = this
        this.nbreParams++;
        let removeButton = $("<div class=\"col-md-3\" style=\"padding: 4px 6px;\" data-bind=\"ifnot: required\"><button style=\"color: #31708f; font-size: 14px; border-radius: 0;\" class=\"btn btn-link\" type=\"button\" id=\"removeParameter\"><i class=\"fa\">&#xf00d;</i> Remove parameter</button></div>");
        this.elementRef.nativeElement = format.html.addParams(this.nbreParams);

        if (this.nbreParams == 1)
            this.param1.nativeElement = $(`#myselect${this.nbreParams} input`);
        if (this.nbreParams == 2)
            this.param2.nativeElement = $(`#myselect${this.nbreParams} input`);
        if (this.nbreParams == 3)
            this.param3.nativeElement = $(`#myselect${this.nbreParams} input`);
        if (this.nbreParams == 4)
            this.param4.nativeElement = $(`#myselect${this.nbreParams} input`);

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
