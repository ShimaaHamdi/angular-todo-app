import { Form } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    // new Todo('this is todo' , false),
    // new Todo (' this is two ')

  ];
  constructor() { }

  getAllTodos() {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }
  deletTodo(index: number) {
    this.todos.splice(index, 1)
  }
  onFormSubmit(){
    console.log("welcomr")
  }
}
