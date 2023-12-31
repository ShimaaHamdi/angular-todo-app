import {   Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit  {
  @Input() todo !: Todo
  @Output() todoClicked: EventEmitter<void> = new EventEmitter;
  @Output() editClicked: EventEmitter<void> = new EventEmitter;
  @Output() deletClicked: EventEmitter<void> = new EventEmitter;
  @ViewChild('editBtn') editBtnElRef!: ElementRef<HTMLElement>;
  @ViewChild('deletBtn') deletBtnElRef!: ElementRef<HTMLElement>;

  test: String = "Default Value"
  constructor() { }

  ngOnInit(): void { }



  onTodoClicked() {
    this.todoClicked.emit()
  }
  onEditClicked() {
    this.editClicked.emit()
  }
  onDeleteClicked() {
    this.deletClicked.emit()
  }
}


