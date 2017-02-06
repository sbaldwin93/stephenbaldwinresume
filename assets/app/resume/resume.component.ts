import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    
})
export class ResumeComponent {
    constructor(private authService: AuthService) {}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}