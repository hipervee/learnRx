import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../services';
import { ToDo } from '../models';
import { Store } from '@ngrx/store';
import * as fromReducer from '../common/reducer';
import * as fromActions from '../common/actions';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'todo-form',
    templateUrl: 'todo.form.html'
})

export class ToDoForm  {
    @Input() todo: ToDo;
    constructor(private store: Store<fromReducer.State>) { }

    add() {
        this.store.dispatch({ type: fromActions.ActionTypes.SAVE, payload: this.todo});
        //this.todo.clear();
    }
}