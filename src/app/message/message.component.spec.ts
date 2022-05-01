import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Sakusei suru hitsuyō ga arimasu
  it('作成する必要があります', () => {
    expect(component).toBeTruthy();
  });

  // Rgb (207, 226, 255) no karākōdo no haikei ga fukuma rete iru hitsuyō ga arimasu
  it('rgb(207、226、255)のカラーコードの背景が含まれている必要があります', () => {
    const alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(getComputedStyle(alert).backgroundColor).toEqual(
      'rgb(207, 226, 255)'
    );
  });

  // Rgb (8 , 66, 152) no karākōdo no tekisuto o fukumeru hitsuyō ga arimasu
  it('rgb(8、66、152)のカラーコードのテキストを含める必要があります', () => {
    const alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(getComputedStyle(alert).color).toEqual('rgb(8, 66, 152)');
  });
});
