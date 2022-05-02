import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  // `Save' botan ga osa reta toki ni tekisuto o tsuika suru hitsuyō ga arimasu
  it('「Save」ボタンが押されたときにテキストを追加する必要があります', () => {
    let t =
      '刊ワル骨川のや堀切ヨ夫著こわ代文ねぶッつ研82雅ラ棋省にぽ本込ヒテメ中腰フえ完売安ツヒソネ電話ク中8質りっ招厳さドかみ政産エムラオ青閣提か保車ねラくも長純表れ。初ホ非文メル交窃陸真上著へす積掲血クカムエ健3近しーふむ企月フ読植午トゆ。2雪督もぜ振後ヌハサ稿更フ名要なす金容すぽそリ囲辞わのう要外ニアスヱ善売ミ陽6側そ国侑倣冥フレひぜ。';
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
