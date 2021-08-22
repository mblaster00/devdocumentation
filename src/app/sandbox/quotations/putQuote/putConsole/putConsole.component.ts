import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { QuotationsService } from 'src/services/quotations.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-putConsole',
    templateUrl: './putConsole.component.html',
    styleUrls: ['./putConsole.component.css']
})
export class PutConsoleComponent implements OnInit, AfterViewInit {
    @ViewChild("editor") private editor: ElementRef<HTMLElement>;

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    bodyRequest: Object;
    values: string;
    quoteId: string;
    bodyResponse: any;
    token: string = " ";
    domain: string = environment.apiUrl

    constructor(
        private quoteService: QuotationsService
    ) { }

    ngOnInit() {}

    ngAfterViewInit(): void {
        ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
        const aceEditor = ace.edit(this.editor.nativeElement);
        aceEditor.setTheme('ace/theme/twilight');
        aceEditor.session.setMode("ace/mode/javascript");
        aceEditor.on("change", () => {
            this.bodyRequest = aceEditor.getValue()
        });
    }

    onKey(event: any) {
        this.values = event.target.value;
    }

    getToken(event: any) {
        this.token = event.target.value;
    }

    getquoteId(event: any) {
        this.quoteId = event.target.value;
    }

    Submit() {
        let selector = $(".panel:last #httpResponse")
        if (selector.length != 0) { selector.empty() }
        let data = {
            quoteId: this.quoteId,
            secret: this.token
        }
        this.quoteService.updateQuote(data, this.bodyRequest).subscribe(res => {
            this.bodyResponse = res;
            $(".panel:last").append(format.html.response(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.error(err));
        })
    }
}