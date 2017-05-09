import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdListModule} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
