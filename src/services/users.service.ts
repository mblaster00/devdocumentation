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

    createUser() {
        return this.http.get('http://localhost:9000/api/seeds/createUsers')
    }
}
