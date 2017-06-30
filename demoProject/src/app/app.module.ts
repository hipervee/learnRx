import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ToDoModule } from './todo';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './common/reducer';
import { ToDoComponent } from './todo/todo.component';
import { ToDoService } from './services';
import { AboutUsComponent } from './components';

import { AppComponent } from './app.component';
import {ToDoEffects} from './common/effects';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    StoreModule.provideStore(fromReducer.reducer),
    EffectsModule.run(ToDoEffects),
    RouterModule.forRoot(routes, { useHash: true }),
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
