import { Injectable } from '@angular/core';
import {ToDo} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ToDoService {
    toDos: ToDo[];
    constructor() {
        this.toDos = [
            new ToDo(1, 'Breakfast'),
            new ToDo(2, 'Lunch'),
            new ToDo(3, 'Dinner'),
            new ToDo(4, 'Sleep'),
            new ToDo(5, 'Repeat')
        ];
     }

    getAll(): Observable<ToDo[]> {
        return Observable.of(this.toDos);//.map(o => o.filter(k => !k.deleted));
    }

    add(name: string) {
        let todo = new ToDo(this.toDos.length + 1, name);
        this.toDos.push(todo);
    }

    delete(todo: ToDo) {
        let index = this.toDos.findIndex(o => o.id == todo.id);
        if(index > -1) {
            this.toDos[index].deleted = true;
        }
    }

    done(todo: ToDo) {
        let index = this.toDos.findIndex(o => o.id == todo.id);
        if(index > -1) {
            this.toDos[index].done = true;
        }
    }
}