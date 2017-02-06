import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    
})
export class BioComponent {
    constructor(private authService: AuthService) {}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}