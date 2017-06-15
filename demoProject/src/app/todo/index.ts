export { ToDoList } from './todo.list';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ToDoList } from './todo.list';
import { ToDoComponent } from './todo.component';
import { ToDoForm } from './todo.form';

@NgModule({
    declarations: [ToDoList, ToDoComponent, ToDoForm],
    imports: [CommonModule, FormsModule, MaterialModule],
    exports: [ToDoComponent],
    providers: []
})
export class ToDoModule { }