import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
@Component({
    selector: 'app-furniture',
    templateUrl: './furniture.component.html'
})
export class FurnitureComponent {
    constructor(private authService: AuthService) {}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}