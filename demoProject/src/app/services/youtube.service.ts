import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class YoutubeService {
    constructor(private http: Http) {
    }

    search(term: string) {
        if (term.length > 2) {
            let url = this.getUrl(term);
            return this.http.get(url).map(response => this.transformResults(response.json()));
        } else {
            return Observable.of([]);
        }
    }

    private getUrl(term: string) {
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=${term}&key=AIzaSyCivTTaw9vQT51OGdHL3DUCYq6HEDsAGKM`;
        return url
    }

    private transformResults(response: any) {
        let videos = response.items.map(item => {
            return {
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.default.url,
            };
        });
        return videos;
    }
}