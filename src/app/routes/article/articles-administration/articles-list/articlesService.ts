import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Banner {
    targetId: number;
    url: string;
    imageUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient, ) { }
    uri
    getBanners(): Observable<Banner[]> {
        return this.http.get('http://localhost:3000/' + 'banner')
            .pipe(map((res: { banners: Banner[] }) => res.banners));
    }

}