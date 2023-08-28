import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { Task1Service } from './_service/task1.service';
import { AtmeMachineTaskModule } from './atme-machine-task/atme-machine-task.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [Task1Service],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        AtmeMachineTaskModule
    ]
})
export class AppModule { }
