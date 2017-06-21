import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services';
import {Observable} from 'rxjs/Rx';
import {ToDo} from '../models';
import {Store} from '@ngrx/store';
import * as fromReducer from '../common/reducer';
import * as fromActions from '../common/actions';
@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
})

export class ToDoComponent implements OnInit {
    todos$: Observable<ToDo[]>;
    todo$: Observable<ToDo>;
    constructor(private store: Store<fromReducer.State>, private todoSvc: ToDoService) { }

    ngOnInit() {
       this.todos$ = this.store.select(fromReducer.getToDos);
       this.todo$ = this.store.select('todo');
    }
}