import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AccessInfo {
    token: string
}
@Injectable({
    providedIn: 'root'
})

export class DeliveryService {
    constructor(private http: HttpClient) { }

    requestDelivery(data) {
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer', "secret-token": data.secret});
        return this.http.post(`${environment.apiUrl}delivery/requestDelivery/${data.quoteId}`, data.body, { headers: reqHeader })
    }

    getDelivery(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "secret-token": data.secret});
        return this.http.get(`${environment.apiUrl}delivery/${data.deliveryId}`, { headers: reqHeader })
    }

    getAll(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "x-access-token": data.token});
        return this.http.get(`${environment.apiUrl}delivery/getAll/${data.userId}`, { headers: reqHeader })
    }

    deleteDelivery(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "secret-token": data.secret});
        return this.http.delete(`${environment.apiUrl}delivery/${data.deliveryId}`, { headers: reqHeader })
    }

    updateDelivery(params, body){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "secret-token": params.secret});
        return this.http.put(`${environment.apiUrl}delivery/${params.deliveryId}`, body, { headers: reqHeader })
    }
}