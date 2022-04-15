import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { FormetComponent } from './formet/formet.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: 'alert', component: AlertComponent },
  { path: 'blockquote', component: BlockquoteComponent },
  { path: 'message', component: MessageComponent },
  { path: 'formet', component: FormetComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
