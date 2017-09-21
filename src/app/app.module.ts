import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from "./template/template.component";
import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BoucleComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
