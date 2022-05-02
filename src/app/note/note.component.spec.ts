import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NoteComponent } from './note.component';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // value of textarea saved to variable text with initial value ''
  it('value of textarea saved to variable text with initial value `` ', () => {
    expect(component.text).toEqual('');
  });

  // value of notes are saved to variable notes with initial value []
  it('value of notes are saved to variable notes with initial value []', () => {
    expect(component.notes).toEqual([]);
  });

  // clear textarea after save
  it('clear textarea after save', () => {
    let t =
      '刊ワル骨川のや堀切ヨ夫著こわ代文ねぶッつ研82雅ラ棋省にぽ本込ヒテメ中腰フえ完売安ツヒソネ電話ク中';
    component.text = t;
    component.saveText();
    expect(component.text).toEqual('');
  });

  // add text to array when click saved
  it('add text to array when click saved', () => {
    let t =
      '刊ワル骨川のや堀切ヨ夫著こわ代文ねぶッつ研82雅ラ棋省にぽ本込ヒテメ中腰フえ完売安ツヒソネ電話ク中';
    component.text = t;
    component.saveText();
    expect(component.text).toEqual('');
    expect(component.notes).toEqual([t]);
  });

  // update array when clicked saved
  it('update array when clicked saved', () => {
    let t =
      '刊ワル骨川のや堀切ヨ夫著こわ代文ねぶッつ研82雅ラ棋省にぽ本込ヒテメ中腰フえ完売安ツヒソネ電話ク中';
    component.text = t;
    component.saveText();
    expect(component.text).toEqual('');
    expect(component.notes).toEqual([t]);
    component.text = t;
    component.saveText();
    expect(component.text).toEqual('');
    expect(component.notes).toEqual([t, t]);
  });

  // `Save' botan ga osa reta toki ni tekisuto o tsuika suru hitsuyō ga arimasu
  it('「Save」ボタンが押されたときにテキストを追加する必要があります', () => {
    let t =
      '刊ワル骨川のや堀切ヨ夫著こわ代文ねぶッつ研82雅ラ棋省にぽ本込ヒテメ中腰フえ完売安ツヒソネ電話ク中';
    component.text = t;
    component.saveText();
    expect(component.text).toEqual('');
    expect(component.notes).toEqual([t]);
    component.text = t;
    component.saveText();
    expect(component.text).toEqual('');
    expect(component.notes).toEqual([t, t]);
  });
});
