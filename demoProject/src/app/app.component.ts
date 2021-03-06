import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">RxTry</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="#">ToDo's</a></li>
                    <li><a href="#/aboutus">About Us</a></li>
                    <li><a href="#/youtube">Youtube Search</a></li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}
