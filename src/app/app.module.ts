import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import { PostCardsComponent } from './components/post-cards/post-cards.component';
import { PostFormComponent } from './components/post-form/post-form.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDashboardComponent,
    PostDashboardComponent,
    PostCardsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
