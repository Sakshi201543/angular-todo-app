import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init{

  
  constructor(){
    super();
    console.log("Todo Service Initialized");
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));

    //Add todos
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }

  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos')); 

    for(let i = 0; i < todos.length; i++){
      if(todos[i].text == todoText){
       todos.splice(i, 1);
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }

  updateTodo(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos')); 

    for(let i = 0; i < todos.length; i++){
      if(todos[i].text == oldText){
       todos[i].text = newText;
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  }
}
