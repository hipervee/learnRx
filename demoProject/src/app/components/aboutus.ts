import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'aboutus',
    template: `
        <div class="col-sm-12">
            <h4>Counter: {{count$ | async}}
                <span *ngIf="even$ | async">(EVEN!)</span>
            </h4>
            <ul>
                <li *ngFor="let person of people$ | async">
                    {{person.name}}
                </li>
            </ul>
            <div>
                {{(person$ | async)?.name}} - {{(person$ | async)?.age}}
            </div>
        </div>
    `
})

export class AboutUsComponent {
    count$: Observable<number>;
    even$: Observable<boolean>;
    people$: Observable<any[]>;
    person$: Observable<any>;

    constructor() {
        this.count$ = Observable.interval(1000)
            .do(val => console.log(val));

        this.people$ = Observable.of([
            { name: 'Kamran' },
            { name: 'Shameen' },
            { name: 'Ravi' }
        ]);

        this.person$ = this.people$.first(person => person['name'] == 'Kamran');

        this.even$ = this.count$.map(val => val % 2 == 0);
    }
}