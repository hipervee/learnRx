import * as fromActions from './actions';
import { ToDo } from '../models';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';

export interface State {
    todos?: ToDo[]
};

const initialState: State = {
    todos: [
        new ToDo(0, "Breakfast"),
        new ToDo(0, "Lunch"),
        new ToDo(0, "Now do some work")
    ]
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case fromActions.ActionTypes.ADD: {
            let todos = [new ToDo(0, action.payload)];
            return {
                todos: state.todos.concat(todos)
            };
        };
        case fromActions.ActionTypes.DELETE: {
            let toDos = state.todos.filter(o => o.name != action.payload);
            return {
                todos: toDos
            };
        };
        case fromActions.ActionTypes.DONE: {
            let todo = state.todos.find(o => o.name == action.payload);
            if(todo) {
                todo.done = !todo.done
            }
            return state;
        };
        default:
            return initialState;
    }
}

export const getToDos = (state: State) => state.todos;
