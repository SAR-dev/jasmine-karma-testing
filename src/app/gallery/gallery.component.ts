import { Component, OnInit } from '@angular/core';
import { ImagefetchService } from '../imagefetch.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  result: any;
  isLoading:Boolean = false;

  constructor(private service : ImagefetchService) { }

  ngOnInit(): void {
    this.getImages()
  }

  getImages(){
    this.isLoading = true;
    this.service.getPhotos().subscribe((response) => {
      this.isLoading = false;
      this.result = response;
    })
  }
}

