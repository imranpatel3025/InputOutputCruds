
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

  @Output() emitRemoveTodo : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onEditTodo(todo: ItodosArr){
    this.emitEditTodo.emit(todo)  
    
  }

  onDelete(removeId: string){
    let getConfirm = confirm(`Are you sure, you want to Remove with id ${removeId}`)
    if(getConfirm){
      this.emitRemoveTodo.emit(removeId)
      // let getIndex = this.todoData.findIndex(t => t.todoId === removeId)
      // this.todoData.splice(getIndex, 1)
    }
  }
}
