import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
@Component({
    selector: 'app-workout',
    templateUrl: './workout.component.html'
})
export class WorkoutComponent {
    constructor(private authService: AuthService) {}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
    ngOnInit() {
        return this.authService.notLoggedIn();
    }
}