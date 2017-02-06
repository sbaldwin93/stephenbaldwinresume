import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
@Component({
    selector: 'app-samples',
    templateUrl: './samples.component.html',
    
})
export class SamplesComponent {
    constructor(private authService: AuthService) {}
    
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}