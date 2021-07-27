import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AccessInfo {
    token: string
}

@Injectable({
    providedIn: 'root'
})

export class QuotationsService {
    constructor(private http: HttpClient) { }

    requestQuote(data) {
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer', "secret-token": data.secret});
        return this.http.post(environment.apiUrl + '/api/quotations/requestQuote', data.body, { headers: reqHeader })
    }

    getQuote(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "secret-token": data.secret});
        return this.http.get(`${environment.apiUrl}/api/quotations/${data.quoteId}`, { headers: reqHeader })
    }

    deleteQuote(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "secret-token": data.secret});
        return this.http.delete(`${environment.apiUrl}/api/quotations/${data.quoteId}`, { headers: reqHeader })
    }

    updateQuote(params, body){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "secret-token": params.secret});
        return this.http.put(`${environment.apiUrl}/api/quotations/${params.quoteId}`, body, { headers: reqHeader })
    }
}