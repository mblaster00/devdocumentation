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
        return this.http.post(environment.apiUrl + '/api/users/register', data)
    }

    login(data) {
        return this.http.post(environment.apiUrl + '/api/users/login', data)
    }

    getApiKey(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "x-access-token": data.token});
        return this.http.get(`${environment.apiUrl}/api/keys/${data.userId}`, { headers: reqHeader })
    }

    getMyInfos(userId) {
        return this.http.get(`${environment.apiUrl}/api/users/${userId}`)
    }

    updatePassword(data){
        var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ', "x-access-token": data.token});
        return this.http.put(`${environment.apiUrl}/api/users/${data.userId}`, data.body, { headers: reqHeader })
    }
}