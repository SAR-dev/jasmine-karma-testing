import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ReactiveComponent } from './reactive.component';

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveComponent],
      providers: [ReactiveFormsModule, FormBuilder, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Sakusei suru hitsuyō ga arimasu
  it('作成する必要があります', () => {
    expect(component).toBeTruthy();
  });

  // Yūkōna `Inputs' ga hitsuyōdesu.
  it('有効な「Inputs」が必要です', () => {
    component.contactForm.setValue({
      name: 'B',
      email: 'invalidemail',
      message: 'Yo',
    });

    expect(component.contactForm.valid).toEqual(false);
  });

  // `Nyūryoku-chi' ga yūkōna baai,`fōmu' ga yūkōdearu hitsuyō ga arimasu.
  it('「Input values」が有効な場合、「Form」が有効である必要があります。', () => {
    component.contactForm.setValue({
      name: 'Bobby',
      email: 'bobby@bobby.com',
      message: 'Email me a soda, please.',
    });

    expect(component.contactForm.valid).toEqual(true);
  });
});
