import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagefetchService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get('https://api.pexels.com/v1/curated?per_page=50', {
      headers: new HttpHeaders({
        Authorization:
          '563492ad6f9170000100000180875a7c8d5046d9b3e60f6244f20fe0',
      }),
    });
  }
}
