import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { MessageComponent } from './message/message.component';
import { FormetComponent } from './formet/formet.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    BlockquoteComponent,
    MessageComponent,
    FormetComponent,
    ReactiveComponent,
    GalleryComponent,
    NoteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
