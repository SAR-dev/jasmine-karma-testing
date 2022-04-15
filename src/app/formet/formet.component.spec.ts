import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormetComponent } from './formet.component';

describe('FormetComponent', () => {
  let component: FormetComponent;
  let fixture: ComponentFixture<FormetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise errors if empty', () => {
    component.onSubmit();
    expect(component.errors.name.length).toBeGreaterThan(0)
    expect(component.errors.email.length).toBeGreaterThan(0)
    expect(component.errors.message.length).toBeGreaterThan(0)
  });

  it('should check email pattern before submitting', () => {
    component.email = "sarmail.com"
    component.onSubmit();
    expect(component.errors.email.length).toBeGreaterThan(0)
  });
});
