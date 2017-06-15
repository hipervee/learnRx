import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ToDoModule } from './todo';
import {StoreModule} from '@ngrx/store';
import * as fromReducer from './common/reducer';

import {ToDoService} from './services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore(fromReducer.reducer),
    BrowserModule,
    ToDoModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
