import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { TodoAjaxService } from "../shared/todo.ajax.service";


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
liste:Object[];
newTodo:string;

 /**
     * Pour utiliser un service dans un component ou
     * ailleurs, on ne fait pas une instance nous même,
     * à la place, on utilise l'injection de dépendance
     * de angular (https://angular.io/guide/dependency-injection)
     * C'est elle qui se chargera de faire les instances
     * des services et de nous les rendre accessibles dans
     * les component et autre.
     * Pour injecter un service dans un component, on 
     * ajoute simplement en argument du constructor une 
     * variable (public ou private, mais souvent private)
     * qui aura notre classe service comme type (peu importe
     * le nom de la variable tant que le type correspond)
     */
  constructor(private todoService:TodoAjaxService) { 
  }

  ngOnInit() {
    this.todoService.getAllTodo().then((todos) => this.liste = <Object[]>todos);
  }

  addTodo() {
    
  }

  removeTodo(index:number) {
    
  }

}
//   constructor(private todoService:TodoAjaxService) { }

// ngOnInit() {
//   this.todoService = this.todoService.getTodos();
// }


// // add items at todolist
// addTodo(){
// this.liste.push(this.newTodo);
// this.newTodo="";
//   }

// // delete items at todolist
// removeTodo(index:number){
// this.liste.splice(index,1);
//   }
// }
