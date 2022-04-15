import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BlockquoteComponent } from './blockquote.component';

describe('BlockquoteComponent', () => {
  let component: BlockquoteComponent;
  let fixture: ComponentFixture<BlockquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a `blockquote` element', () => {
    const blockquote = fixture.debugElement.query(By.css('blockquote')).nativeElement;
    expect(blockquote).toBeTruthy()
  });

  it('should contain a `blockquote` element', () => {
    const cite = fixture.debugElement.query(By.css('blockquote cite')).nativeElement;
    expect(cite).toBeTruthy()
  });

  it('quote should have a margin by 4 units', () => {
    const el = fixture.debugElement.query(By.css('blockquote p')).nativeElement;
    expect(el).toHaveClass("mb-4")
  });

  it('footer should contain a `blockquote-footer` class', () => {
    const el = fixture.debugElement.query(By.css('blockquote footer')).nativeElement;
    expect(el).toHaveClass("blockquote-footer")
  });
});
