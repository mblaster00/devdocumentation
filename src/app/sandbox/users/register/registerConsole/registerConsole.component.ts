import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { UsersService } from 'src/services/users.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
    selector: 'app-registerConsole',
    templateUrl: './registerConsole.component.html',
    styleUrls: ['./registerConsole.component.css']
})

export class RegisterConsoleComponent implements OnInit, AfterViewInit {
    @ViewChild("editor") private editor: ElementRef<HTMLElement>;

    parameterName: string;
    parameterValue: string;
    contentType: string = "application/json";
    bodyRequest: Object;
    values: string;
    bodyResponse: any;
    domain: string = environment.apiUrl
    
    constructor(
        private userService: UsersService
    ) { }

    ngOnInit() { }

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

    Submit() {
        let selector = $(".panel:last #httpResponse")
            if (selector.length != 0)
                selector.empty()
        this.userService.register(this.bodyRequest).subscribe(res => {
            $(".panel:last").empty()
            this.bodyResponse = res;
            console.log("reponse suite à l'inscription ====>", this.bodyResponse)
            $(".panel:last").append(format.html.response(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.error(err));
        })
    }
}
