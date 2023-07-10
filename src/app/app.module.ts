import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
