import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { NgForm } from '@angular/forms'
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  showValidationErrors!: boolean

  constructor(private dataService: DataService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();

  }
  onFormSubmit(form: NgForm) {
    console.log(form);
    if (form.invalid) return alert("Form Is Invalid")

    this.dataService.addTodo(new Todo(form.value.text))
    this.showValidationErrors = false
    form.reset()
  }
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
  setCompleted(todo: Todo) {
    //set TodoComplete
    todo.completed = !todo.completed;
  }
  editTodo(todo: Todo) {
    // we need
    // 1- index of todo
    // 2- user needs to enter new updated information
    const index = this.todos.indexOf(todo);
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      height: '700px',
      data: todo
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
    // this.dataService.updateTodo
  }
  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deletTodo(index)
  }


}
