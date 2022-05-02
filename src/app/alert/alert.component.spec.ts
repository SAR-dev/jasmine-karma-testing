import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Sakusei suru hitsuyō ga arimasu
  it('作成する必要があります', () => {
    expect(component).toBeTruthy();
  });

  // Togurubotan ga fukuma rete iru hitsuyō ga arimasu.
  // it('トグルボタンが含まれている必要があります', () => {
  //   const btn = fixture.debugElement.query(By.css('button')).nativeElement;
  //   expect(btn.innerHTML).toContain('Toogle Visibility');
  // });
  it('トグルボタンが含まれている必要があります', () => {
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btn.innerHTML).toContain('Toogle Visibility');
  });

  // Alert daiarogu o fukumeru hitsuyō ga arimasu.
  it('Alert ダイアログを含める必要があります', () => {
    const alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(alert).toBeTruthy();
  });

  // Togurubotan wa kashi-sei o kirikaeru hitsuyō ga arimasu.
  it('トグルボタンは可視性を切り替える必要があります', () => {
    expect(component.visible).toBeTruthy();
    component.toogleVisibility();
    expect(component.visible).toBeFalsy();
  });
});
