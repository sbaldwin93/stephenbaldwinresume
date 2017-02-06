import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "../auth/authentication.component";
import { HeaderComponent } from "../header/header.component";
import { routing } from "./app.routing";
import { AuthService } from "../auth/auth.service";
import { ErrorComponent } from "../errors/error.component";
import { ErrorService } from "../errors/error.service";
import { ResumeComponent } from "../resume/resume.component";
import { ResumeModule } from "../resume/resume.module";
import { SamplesModule } from "../samples/samples.module";
import { SamplesComponent } from "../samples/samples.component";
import { BioModule } from "../bio/bio.module";
import { BioComponent } from "../bio/bio.component";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        SamplesComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        ResumeModule,
        BioModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}