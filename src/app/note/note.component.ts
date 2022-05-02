import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  text: string = '';
  notes: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}

  setText(e: any) {
    this.text = e.target.value;
  }

  saveText() {
    if (this.text.trim().length !== 0) {
      this.notes.unshift(this.text);
      this.text = '';
    }
  }
}
