import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-requestDelivery',
    templateUrl: './requestDelivery.component.html',
    styleUrls: ['./requestDelivery.component.css']
})
export class RequestDeliveryComponent implements OnInit {

    domain: string = environment.apiUrl

    constructor() { }

    ngOnInit() {
    }

    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("nav-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

}
