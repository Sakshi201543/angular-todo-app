import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos;
  text;
  oldText;
  appState = 'default';
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo(){
    var newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);
    this.todoService.addTodo(newTodo);
  }

  deleteTodo(todoText){
    console.log("deleted");
    for(let i = 0; i < this.todos.length; i++){
      if(this.todos[i].text == todoText){
      this.todos.splice(i, 1);
      }
    }

    this.todoService.deleteTodo(todoText);
  }

  editTodo(todo){
    this.appState = 'edit';
    console.log(this.appState);
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo(){
    for(let i = 0; i < this.todos.length; i++){
      if(this.todos[i].text == this.oldText){
       this.todos[i].text = this.text;
      }
    }

    this.todoService.updateTodo(this.oldText, this.text);
  }
}
