import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { FormetComponent } from './formet/formet.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MessageComponent } from './message/message.component';
import { NoteComponent } from './note/note.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: 'alert', component: AlertComponent },
  { path: 'blockquote', component: BlockquoteComponent },
  { path: 'message', component: MessageComponent },
  { path: 'formet', component: FormetComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'note', component: NoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
