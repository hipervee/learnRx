import * as fromActions from './actions';
import { ToDo } from '../models';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';

export interface State {
    todos?: ToDo[],
    todo?: ToDo
};

const initialState: State = {
    todos: [],
    todo: new ToDo(0, '')
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
       case fromActions.ActionTypes.EDIT: {
            let index = state.todos.findIndex(o => o.id == action.payload.id)
            return Object.assign({}, state, {
                todo: Object.assign({}, state.todos[index])
            });
        };

        case fromActions.ActionTypes.LOAD_COMPLETE: {
            return Object.assign({}, state, {
                todos: action.payload
            });
        }
        default:
            return initialState;
    }
}

export const getToDos = (state: State) => state.todos;
