import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormetComponent } from './formet.component';

describe('FormetComponent', () => {
  let component: FormetComponent;
  let fixture: ComponentFixture<FormetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Sakusei suru hitsuyō ga arimasu
  it('作成する必要があります', () => {
    expect(component).toBeTruthy();
  });

  // `Input' ga kūhaku no toki ni fōmu ga sōshin sa reta baai, erā ga hassei suru hazudesu.
  it('「Input」が空白のときにフォームが送信された場合、エラーが発生するはずです', () => {
    component.onSubmit();
    expect(component.errors.name.length).toBeGreaterThan(0);
    expect(component.errors.email.length).toBeGreaterThan(0);
    expect(component.errors.message.length).toBeGreaterThan(0);
  });

  // Fōmu o sōshin suru mae ni mērupatān o kakunin suru hitsuyō ga arimasu.
  it('フォームを送信する前にメールパターンを確認する必要があります。', () => {
    component.email = 'sarmail.com';
    component.onSubmit();
    expect(component.errors.email.length).toBeGreaterThan(0);
  });
});
