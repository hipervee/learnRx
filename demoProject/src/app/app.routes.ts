import { Routes } from '@angular/router';
import { ToDoComponent } from './todo/todo.component';
import { AboutUsComponent } from './components';
import { YoutubeSearch } from './todo/youtube/index';

export const routes: Routes = [
    {
        path: '',
        component: ToDoComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    },
    {
        path: 'youtube',
        component: YoutubeSearch
    }];
