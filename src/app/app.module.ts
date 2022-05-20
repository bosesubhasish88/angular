import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelpWidgetComponent } from './help-widget/help-widget.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoComponent } from './component/todo/todo.component';
import { TodoPipe } from './component/todos/todo.pipe';
import { QuestionComponent } from './component/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpWidgetComponent,
    HeaderComponent,
    SidebarComponent,
    TodosComponent,
    TodoComponent,
    TodoPipe,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
