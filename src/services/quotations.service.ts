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
        return this.http.post(environment.apiUrl + 'quotations/requestQuote', data.body, { headers: reqHeader })
    }
}