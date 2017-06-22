import { Component, OnInit } from '@angular/core';
import { Video } from '../../models';
import { YoutubeService } from '../../services';

@Component({
    selector: 'yt-search',
    template: `
    <div class="col-sm-4 yt-search">
        <yt-search-box (searchEmitter)="search($event)"></yt-search-box>
        <yt-list [videos]=videos></yt-list>
    </div>`,
    providers: [YoutubeService]
})

export class YoutubeSearch implements OnInit {
    videos: Video[] = []
    constructor(private youtubeSvc: YoutubeService) {
    }

    ngOnInit() {
        this.search('');
    }

    search(term) {
        this.youtubeSvc.search(term).subscribe(data => {
            this.videos = data;
        });
    }
}