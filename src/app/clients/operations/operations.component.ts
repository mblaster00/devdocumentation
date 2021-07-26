import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/services/delivery.service';

@Component({
    selector: 'app-operations',
    templateUrl: './operations.component.html',
    styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit { 
    contentType: string = "application/json";
    token: string = localStorage.getItem('x-access-token');
    userId: string = localStorage.getItem('current_user');
    bodyResponse: any;

    constructor(
        private deliveryService: DeliveryService,
    ) { 
        this.getOperations()
    }

    ngOnInit() {
    }

    getOperations() {
        let data = { 
            token: this.token,
            userId: this.userId
        }
        this.deliveryService.getAll(data).subscribe(res => {
            this.bodyResponse = res;
        }, err => {
            //console.log('error =========>', err)
        })
    }
}
