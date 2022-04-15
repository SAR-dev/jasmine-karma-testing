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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain primary color background', () => {
    const alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(getComputedStyle(alert).backgroundColor).toEqual(
      'rgb(207, 226, 255)'
    );
  });

  it('should contain primary color text', () => {
    const alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(getComputedStyle(alert).color).toEqual('rgb(8, 66, 152)');
  });
});
