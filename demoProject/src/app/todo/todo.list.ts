import { Component, OnInit, Input } from '@angular/core';
import {ToDo} from '../models';
import { ToDoService } from '../services';
import {Store} from '@ngrx/store';
import * as fromReducer from '../common/reducer';
import * as fromActions from '../common/actions';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo.list.html'
})

export class ToDoList implements OnInit {
    @Input()  todos: ToDo[] = [];
    constructor(private store: Store<fromReducer.State>, private todoSvc: ToDoService) { }

    ngOnInit() { }

    done(todo: ToDo) {
        this.store.dispatch({type: fromActions.ActionTypes.DONE, payload: todo.name});
    }

    delete(todo: ToDo) {
        this.store.dispatch({type: fromActions.ActionTypes.DELETE, payload: todo.name});
    }
}