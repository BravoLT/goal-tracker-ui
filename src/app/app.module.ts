import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalComponent } from './goal/goal.component';
import { GoalService } from './goal.service';

@NgModule({
  declarations: [
    AppComponent,
    GoalListComponent,
    GoalComponent
  ],
  imports: [
    MaterialModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    GoalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
