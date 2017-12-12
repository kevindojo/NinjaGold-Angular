import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { DisplayComponent } from './display/display.component';
import { LocationsComponent } from './locations/locations.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    DisplayComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
