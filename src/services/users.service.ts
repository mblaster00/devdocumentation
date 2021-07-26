import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface AccessInfo {
    token: string
}

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    constructor(private http: HttpClient) { }

    register(data) {
        return this.http.post(environment.apiUrl + 'users/register', data)
    }

    login(data) {
        return this.http.post(environment.apiUrl + 'users/login', data)
    }

    getApiKey(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "x-access-token": data.token});
        return this.http.get(`${environment.apiUrl}keys/${data.userId}`, { headers: reqHeader })
    }

    getMyInfos(userId) {
        return this.http.get(`${environment.apiUrl}users/${userId}`)
    }
}
