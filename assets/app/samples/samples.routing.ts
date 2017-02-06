import { Routes, RouterModule } from "@angular/router";

import { ShopComponent } from "./shop/shop.component";
import { FurnitureComponent } from "./furniture/furniture.component";
import { WorkoutComponent } from "./workout/workout.component";
import { FoundationComponent } from "./foundation/foundation.component";

const SAMPLES_ROUTES: Routes = [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: '1', component: ShopComponent },
    { path: '2', component: FurnitureComponent },
    { path: '3', component: WorkoutComponent },
    { path: '4', component: FoundationComponent }
];

export const SamplesRouting = RouterModule.forChild(SAMPLES_ROUTES);