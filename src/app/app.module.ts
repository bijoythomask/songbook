import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import {MdButtonModule} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
