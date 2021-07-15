import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import * as ace from "ace-builds";
import * as format from "src/app/console.format";
import { UsersService } from 'src/services/users.service';
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
    
    constructor(
        private userService: UsersService,
        private elementRef: ElementRef, private renderer: Renderer2
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
        this.renderer.listen(this.elementRef.nativeElement, 'keyup', () => { this.addHeader(); });
    }

    onKey(event: any) {
        this.values = event.target.value;
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
        this.userService.register(this.bodyRequest).subscribe(res => {
            $(".panel:last").empty()
            this.bodyResponse = res;
            console.log("reponse suite à l'inscription ====>", this.bodyResponse)
            $(".panel:last").append(format.html.register(this.bodyResponse));
        }, err => {
            $(".panel:last").append(format.html.Error(err));
        })
    }
}
