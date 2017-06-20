import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ToDoModule } from './todo';
import {StoreModule} from '@ngrx/store';
import * as fromReducer from './common/reducer';
import { ToDoComponent } from './todo/todo.component';
import { ToDoService } from './services';
import { AboutUsComponent } from './components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    StoreModule.provideStore(fromReducer.reducer),
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
