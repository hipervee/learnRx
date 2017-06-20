import { Routes } from '@angular/router';
import { ToDoComponent } from './todo/todo.component';
import { AboutUsComponent } from './components';

export const routes: Routes = [
    {
        path: '',
        component: ToDoComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    }];
