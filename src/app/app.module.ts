import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { AppTableComponent } from './components/app-table/app-table.component';
import {MatTableModule} from '@angular/material/table';
import { AppInputComponent } from './components/app-input/app-input.component'

@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppInputComponent,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
