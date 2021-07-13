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
        return this.http.post(environment.apiUrl + 'quotations/requestQuote', data)
    }
}