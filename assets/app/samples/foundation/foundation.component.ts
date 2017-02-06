import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
@Component({
    selector: 'app-foundation',
    templateUrl: './foundation.component.html'
})
export class FoundationComponent {
    constructor(private authService: AuthService) {}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}