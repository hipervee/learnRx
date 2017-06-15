import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromActions from './actions';
import {ToDo} from '../models';

@Injectable()
export class ToDoEffects {

  @Effect()
  add$: Observable<Action> = this.actions$
    .ofType(fromActions.ActionTypes.ADD)
    .map(toPayload)
    .switchMap(query => {
        console.log("Inside Effetcs");
        return Observable.of(new fromActions.AddCompleteAction(new ToDo(99, 'sdfsdf')))
    });

    constructor(private actions$: Actions) { }
}
