import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "../auth/authentication.component";
import { ResumeComponent } from "../resume/resume.component";
import { SamplesComponent } from "../samples/samples.component";
import { BioComponent } from "../bio/bio.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: '../auth/auth.module#AuthModule' },
    { path: 'resume', component: ResumeComponent },
    { path: 'about', component: BioComponent },
    { path: 'samples', component: SamplesComponent, loadChildren: '../samples/samples.module#SamplesModule' }

];

export const routing = RouterModule.forRoot(APP_ROUTES);