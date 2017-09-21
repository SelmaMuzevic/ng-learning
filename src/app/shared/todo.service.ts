import {Injectable} from '@angular/core';

/* Les services vont servir a encapsuler la logique business 
d'une application angular ( les trucs du model en gros)
Ils pourront etre facilement injectees et partages entre plusieurs 
components et autres services 
*/

@Injectable()
export class TodoService{
liste:string[] = [
    "Pommes", 
    "Poires", 
    "Prunes", 
    "Raisins"
    ];

getTodos():string[] {
    return this.liste;
}

add(todo:string){
this.liste.push(todo);

  }

remove(index:number){
this.liste.splice(index,1);
  }
}