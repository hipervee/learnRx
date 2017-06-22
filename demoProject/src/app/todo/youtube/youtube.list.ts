import { Component, Input, EventEmitter } from '@angular/core';
import { Video } from '../../models';

@Component({
    selector: 'yt-list',
    template: `
    <div class="row">
        <div class="col-sm-12 search-items">
            <img [src]="video.thumbnail" *ngFor="let video of videos" width="120" height="90" />
        </div>
    </div>
    `
})

export class YoutubeSearchResults {
    @Input() videos: Video[] = []
    constructor() { }
}