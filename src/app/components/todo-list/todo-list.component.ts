import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ItodosArr } from 'src/app/model/todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoData ! : Array<ItodosArr>

  @Output() emitEditTodo : EventEmitter<ItodosArr> = new EventEmitter<ItodosArr>()

  constructor() { }

  ngOnInit(): void {
  }

  onEditTodo(todo: ItodosArr){
    this.emitEditTodo.emit(todo)  
    
  }

}
