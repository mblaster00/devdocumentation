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
        private quotationService: QuotationsService
    ) { }

    ngOnInit() { }

    contentType: string = "application/json";
    bodyRequest: Object;
    secret: string = " ";
    bodyResponse: any;
    domain: string = environment.apiUrl;

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
