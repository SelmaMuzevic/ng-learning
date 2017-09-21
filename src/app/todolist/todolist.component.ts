import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
liste:string[];
newTodo:string;

  constructor(private todoService:TodoService) { }

ngOnInit() {
  this.liste = this.todoService.getTodos();
  }
// add items at todolist
addTodo(){
this.liste.push(this.newTodo);
this.newTodo="";
  }

// delete items at todolist
removeTodo(index:number){
this.liste.splice(index,1);
  }
}
