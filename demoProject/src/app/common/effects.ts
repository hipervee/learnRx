import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from './actions';
import * as fromReducer from '../common/reducer';
import { ToDo } from '../models';
import { ToDoService } from '../services/todo.service';
import { Store } from '@ngrx/store';

@Injectable()
export class ToDoEffects {
    @Effect()
    load$ = this.actions$
        .ofType(fromActions.ActionTypes.LOAD)
        .switchMap(() => {
            return this.todoSvc.getAll().map(d => {
                return new fromActions.LoadCompleteAction(d);
            })
        });
    
    @Effect()
    save$ = this.actions$
    .ofType(fromActions.ActionTypes.SAVE)
    .map(action => action.payload)
    .switchMap((todo) => {
        return this.todoSvc.save(todo).map(d => {
                return {
                    type: fromActions.ActionTypes.LOAD
                };
            }).catch(eror => Observable.of({type: fromActions.ActionTypes.LOAD}))
    });

    @Effect()
    delete$ = this.actions$
            .ofType(fromActions.ActionTypes.DELETE)
            .map(toPayload)
            .switchMap(todo => {
                    return this.todoSvc.delete(todo).map(d => {
                        return new fromActions.LoadCompleteAction(d);
                    });
            });

    constructor(private actions$: Actions, private todoSvc: ToDoService) {
    }
}
