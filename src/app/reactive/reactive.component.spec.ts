import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveComponent } from './reactive.component';

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveComponent],
      providers: [ReactiveFormsModule, FormBuilder, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.contactForm.setValue({
      name: '',
      email: 'invalidemail',
      message: '',
    });

    expect(component.contactForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.contactForm.setValue({
      name: 'Bobby',
      email: 'bobby@bobby.com',
      message: 'Email me a soda, please.',
    });

    expect(component.contactForm.valid).toEqual(true);
  });
});
