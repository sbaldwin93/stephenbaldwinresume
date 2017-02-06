import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        return this.authService.loggedIn();
    }
}