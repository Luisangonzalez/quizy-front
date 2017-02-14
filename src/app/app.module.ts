import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

// Root Angular2 Module
@NgModule({
  // Imports modules we depend on
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    // Declare components, directives, pipes
    declarations: [
        AppComponent,
        routedComponents
    ],
    // Provider services to app root injector
    // providers:[],
    // Bootstrap a component
    bootstrap: [AppComponent]
})
// Class to define the NgModule
export class AppModule { }
