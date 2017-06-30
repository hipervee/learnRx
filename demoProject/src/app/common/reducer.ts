import * as fromActions from './actions';
import { ToDo } from '../models';
import { createSelector } from 'reselect';
import { Action } from '@ngrx/store';

export interface State {
    todos?: ToDo[],
    todo?: ToDo
};

const initialState: State = {
    todos: [
        new ToDo(1, "Breakfast"),
        new ToDo(2, "Lunch"),
        new ToDo(3, "Now do some work")
    ],
    todo: new ToDo(0, '')
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case fromActions.ActionTypes.SAVE: {
            let todo = { ...action.payload };
            let index = state.todos.findIndex(o => o.id == todo.id);

            if (index > -1) {
                return Object.assign({}, state, {
                    todos: state.todos.slice(0, index)
                        .concat(Object.assign({}, state.todos[index], todo))
                        .concat(state.todos.slice(index + 1)),
                    todo: new ToDo(0, '')
                });
            } else {
                todo.id = state.todos.length + 1;
                return Object.assign({}, state, {
                    todos: [...state.todos, todo],
                    todo: new ToDo(0, '')
                });
            }
        };

        case fromActions.ActionTypes.EDIT: {
            let index = state.todos.findIndex(o => o.id == action.payload)
            return Object.assign({}, state, {
                todo: Object.assign({}, state.todos[index])
            });
        };
        case fromActions.ActionTypes.DELETE: {
            return Object.assign({}, state, {
                todos: state.todos.filter(o => o.id != action.payload)
            });
        };
        case fromActions.ActionTypes.DONE: {
            let todo = state.todos.find(o => o.name == action.payload);
            if (todo) {
                todo.done = !todo.done
            }
            return state;
        };
        case fromActions.ActionTypes.LOAD_COMPLETE: {
            console.log(fromActions.ActionTypes.LOAD);
            console.log(action.payload);
            return Object.assign({}, state, {
                todos: action.payload
            });
        }
        default:
            return initialState;
    }
}

export const getToDos = (state: State) => state.todos;
