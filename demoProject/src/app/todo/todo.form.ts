import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services';
import {Store} from '@ngrx/store';
import * as fromReducer from '../common/reducer';
import * as fromActions from '../common/actions';

@Component({
    selector: 'todo-form',
    templateUrl: 'todo.form.html',
    styles: [
        `
        
        `
    ]
})

export class ToDoForm implements OnInit {
    name: string;
    constructor(private store: Store<fromReducer.State>, private todoSvc: ToDoService) {  }

    ngOnInit() { }

    add() {
        this.store.dispatch({type: fromActions.ActionTypes.ADD, payload: this.name});
        this.name = '';
    }
}