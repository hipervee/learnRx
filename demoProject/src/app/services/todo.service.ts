import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToDo } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ToDoService {
    apiUrl: 'http://localhost:3000/';

    toDos: ToDo[];
    constructor(private http: Http) {
        this.toDos = [
            new ToDo(1, 'Breakfast'),
            new ToDo(2, 'Lunch'),
            new ToDo(3, 'Dinner'),
            new ToDo(4, 'Sleep'),
            new ToDo(5, 'Repeat')
        ];
    }

    getAll() {
        console.log('GETALL Called');
        return this.http.get('http://localhost:3000/' + 'todos').map(response => response.json());
    }

    add(name: string) {
        let todo = new ToDo(this.toDos.length + 1, name);
        this.toDos.push(todo);
    }

    delete(todo: ToDo) {
        let index = this.toDos.findIndex(o => o.id == todo.id);
        if (index > -1) {
            this.toDos[index].deleted = true;
        }
    }

    done(todo: ToDo) {
        let index = this.toDos.findIndex(o => o.id == todo.id);
        if (index > -1) {
            this.toDos[index].done = true;
        }
    }
}