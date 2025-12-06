import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventTrackerComponent } from './event-tracker/event-tracker.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EventTrackerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
