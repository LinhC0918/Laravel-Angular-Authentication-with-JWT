import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AngService {
    private url = 'http://localhost:8000/api/auth';

    constructor(private http: HttpClient) {
    }

    register(data) {
        return this.http.post(`${this.url}/register`, data);
    }

    login(data) {
        return this.http.post(`${this.url}/login`, data);
    }
}
