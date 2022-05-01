import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BlockquoteComponent } from './blockquote.component';

describe('BlockquoteComponent', () => {
  let component: BlockquoteComponent;
  let fixture: ComponentFixture<BlockquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockquoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Sakusei suru hitsuyō ga arimasu
  it('作成する必要があります', () => {
    expect(component).toBeTruthy();
  });

  // `Blockquote' yōso o fukumeru hitsuyō ga arimasu
  it('「blockquote」要素を含める必要があります', () => {
    const blockquote = fixture.debugElement.query(
      By.css('blockquote')
    ).nativeElement;
    expect(blockquote).toBeTruthy();
  });

  // `Cite' yōso o fukumeru hitsuyō ga arimasu
  it('「Cite」要素を含める必要があります', () => {
    const cite = fixture.debugElement.query(By.css('blockquote cite')).nativeElement;
    expect(cite).toBeTruthy();
  });

  // `Quote' no shimo mājin wa 4 tan'idearu hitsuyō ga arimasu
  it('「quote」の下マージンは4単位である必要があります', () => {
    const el = fixture.debugElement.query(By.css('blockquote p')).nativeElement;
    expect(el).toHaveClass('mb-4');
  });

  // `Futtā' ni wa `blockquote - futtā' kurasu ga fukuma rete iru hitsuyō ga arimasu
  it('「footer」には「blockquote-footer」クラスが含まれている必要があります', () => {
    const el = fixture.debugElement.query(By.css('blockquote footer')).nativeElement;
    expect(el).toHaveClass('blockquote-footer');
  });
});
