import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ImagefetchService } from '../imagefetch.service';
import * as Rx from 'rxjs';
import { GalleryComponent } from './gallery.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let sample = {
  page: 1,
  per_page: 2,
  photos: [
    {
      id: 11808270,
      width: 3995,
      height: 5993,
      url: 'https://www.pexels.com/photo/brown-and-white-concrete-building-11808270/',
      photographer: 'Mathias P.R. Reding',
      photographer_url: 'https://www.pexels.com/@matreding',
      photographer_id: 2848684,
      avg_color: '#78756E',
      src: {
        original:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg',
        large2x:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
        large:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
        medium:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
        small:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
        portrait:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
        landscape:
          'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
        tiny: 'https://images.pexels.com/photos/11808270/pexels-photo-11808270.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 8453729,
      width: 2564,
      height: 3568,
      url: 'https://www.pexels.com/photo/summer-texture-garden-leaf-8453729/',
      photographer: 'Alexander Kozlov',
      photographer_url: 'https://www.pexels.com/@alexander-kozlov-3442124',
      photographer_id: 3442124,
      avg_color: '#668110',
      src: {
        original:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg',
        large2x:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940',
        large:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940',
        medium:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350',
        small:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130',
        portrait:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800',
        landscape:
          'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200',
        tiny: 'https://images.pexels.com/photos/8453729/pexels-photo-8453729.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280',
      },
      liked: false,
      alt: '',
    },
  ],
  total_results: 8000,
  next_page: 'https://api.pexels.com/v1/curated/?page=2\u0026per_page=2',
};

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GalleryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPhotos and get response as empty array', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(ImagefetchService);
    spyOn(service, 'getPhotos').and.callFake(() => {
      return Rx.of(sample).pipe(Rx.delay(2000));
    });
    component.getImages();
    tick(1000);
    expect(component.isLoading).toEqual(true);
    tick(1000);
    expect(component.isLoading).toEqual(false);
    expect(component.result).toEqual(sample);
  }));
});
