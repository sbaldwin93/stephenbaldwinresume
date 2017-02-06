import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from "./shop/shop.component";
import { FurnitureComponent } from "./furniture/furniture.component";
import { WorkoutComponent } from "./workout/workout.component";
import { FoundationComponent } from "./foundation/foundation.component";
import { SamplesRouting } from "./samples.routing";
@NgModule({
    declarations: [
        ShopComponent,
        FurnitureComponent,
        WorkoutComponent,
        FoundationComponent,
    ],
    imports: [
        CommonModule,
        SamplesRouting
    ]
})
export class SamplesModule { }