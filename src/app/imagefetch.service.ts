import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagefetchService {

  constructor(private http:HttpClient) { }

  getMemes() {
    return this.http.get("https://api.imgflip.com/get_memes");
  }
}
