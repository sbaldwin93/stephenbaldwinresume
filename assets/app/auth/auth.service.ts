import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService, private router: Router) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    loggedIn() {
        const authCheck = localStorage.getItem('userId');
        if(authCheck !== null) {
            return this.router.navigateByUrl('/resume');
        }
    }
    notLoggedIn() {
        const authCheck = localStorage.getItem('userId');
        if(authCheck == null) {
            return this.router.navigateByUrl('/auth/login');
        }
    }  
}