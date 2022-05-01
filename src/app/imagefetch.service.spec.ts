import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ImagefetchService } from './imagefetch.service';

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

let auth_key = '563492ad6f9170000100000180875a7c8d5046d9b3e60f6244f20fe0';

describe('ImagefetchService', () => {
  let service: ImagefetchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ImagefetchService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // Sakusei suru hitsuyō ga arimasu
  it('作成する必要があります', () => {
    expect(service).toBeTruthy();
  });

  // GetPhotos wa GET o shiyō shite dēta o shutoku suru hitsuyō ga arimasu
  it('getPhotosはGETを使用してデータを取得する必要があります', () => {
    service.getPhotos().subscribe();
    const testRequest = httpTestingController.expectOne(
      'https://api.pexels.com/v1/curated?per_page=50'
    );
    expect(testRequest.request.method).toEqual('GET');
    expect(testRequest.request.headers.get('Authorization')).toBe(auth_key);
  });

  // GetPhotos wa, yobidasa reta toki ni dēta o fetchi shite dēta o kaesu hitsuyō ga arimasu.
  it('getPhotosは、呼び出されたときにデータをフェッチしてデータを返す必要があります。', () => {
    service.getPhotos().subscribe((res) => {
      expect(res).toEqual(sample);
    });

    const testRequest = httpTestingController.expectOne(
      'https://api.pexels.com/v1/curated?per_page=50'
    );
    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.headers.get('Authorization')).toBe(auth_key);

    testRequest.flush(sample);
  });
});
