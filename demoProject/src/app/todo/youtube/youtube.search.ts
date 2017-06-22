import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'yt-search-box',
    template: `
    <div class="row">
        <div class="col-sm-12">
            <div class="input-group">
                <input #input (input)="searchEmitter.emit(input.value)" type="text" class="form-control" placeholder="Search" />
            </div>
        </div>
    </div>
    `
})

export class YoutubeSearchBox {
    @Output() searchEmitter = new EventEmitter();
    constructor() { }
}