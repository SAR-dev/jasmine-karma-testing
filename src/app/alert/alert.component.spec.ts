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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a toogle button', () => {
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btn.innerHTML).toContain('Toogle Visibility');
  });

  it('should contain a alert dialogue', () => {
    const alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
    expect(alert).toBeTruthy()
  });

  it('toogle button should toogle visibility', () => {
    expect(component.visible).toBeTruthy();
    component.toogleVisibility();
    expect(component.visible).toBeFalsy();
  });
});
