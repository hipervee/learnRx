import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToDo } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ToDoService {
    apiUrl:string =  'http://localhost:3000/todos';

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
        return this.http.get(this.apiUrl).map(response => response.json());
    }

    save(todo: ToDo) {
        if(todo.id) {
            return this.http.put(this.apiUrl, todo);
        }
        return this.http.post(this.apiUrl, todo);
    }

    delete(todo: ToDo) {
        return this.http.delete(this.apiUrl + '/' + todo.id);
    }

    done(todo: ToDo) {
        let index = this.toDos.findIndex(o => o.id == todo.id);
        if (index > -1) {
            this.toDos[index].done = true;
        }
    }
}