export { ToDoList } from './todo.list';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ToDoList } from './todo.list';
import { ToDoComponent } from './todo.component';
import { ToDoForm } from './todo.form';
import  { YoutubeSearch, YoutubeSearchResults, YoutubeSearchBox } from './youtube';


@NgModule({
    declarations: [ToDoList, ToDoComponent, ToDoForm, YoutubeSearch, YoutubeSearchResults, YoutubeSearchBox],
    imports: [CommonModule, FormsModule, MaterialModule],
    exports: [ToDoComponent, YoutubeSearch],
    providers: []
})
export class ToDoModule { }