import {Action} from '@ngrx/store';
import {ToDo} from '../models';
export const ActionTypes = {
    LOAD:               '[ToDo] Load',
    LOAD_COMPLETE:      '[ToDo] Load Complete',
    SAVE:               '[ToDo] Save',
    EDIT:               '[ToDo] Edit',
    DONE:               '[ToDo] Done',
    DELETE:             '[ToDo] Delete'
};

export class LoadCompleteAction implements Action {
    type = ActionTypes.LOAD_COMPLETE
    payload = {};
    constructor(payload) {
        this.payload = payload;
    }
}
