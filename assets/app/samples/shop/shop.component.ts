import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html'
})
export class ShopComponent {
    constructor(private authService: AuthService) {}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}