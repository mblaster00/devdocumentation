import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DeliveryService, } from 'src/services/delivery.service';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
declare var $: any;


@Component({
    selector: 'app-requestConsole',
    templateUrl: './requestConsole.component.html',
    styleUrls: ['./requestConsole.component.css']
})
export class RequestConsoleComponent implements OnInit, AfterViewInit {
    @ViewChild("editor") private editor: ElementRef<HTMLElement>;

    constructor(
        private deliveryService: DeliveryService,
        private elementRef: ElementRef, private renderer: Renderer2
    ) { }

    ngOnInit() {
    }

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    bodyRequest: Object;
    quoteId: string;
    token: string = " ";
    bodyResponse: any;

    ngAfterViewInit(): void {
        ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
        const aceEditor = ace.edit(this.editor.nativeElement);
        aceEditor.setTheme('ace/theme/twilight');
        aceEditor.session.setMode("ace/mode/javascript");
        aceEditor.on("change", () => {
            this.bodyRequest = aceEditor.getValue()
        });
        this.renderer.listen(this.elementRef.nativeElement, 'keyup', () => { this.addHeader(); });
    }

    getToken(event: any) {
        this.token = event.target.value;
    }

    getquoteId(event: any) {
        this.quoteId = event.target.value;
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
            secret: this.token,
            quoteId: this.quoteId,
            body: this.bodyRequest
        }
        this.deliveryService.requestDelivery(data).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.delivery(this.bodyResponse));
        }, err => {
            console.log(err)
        })
    }
}
