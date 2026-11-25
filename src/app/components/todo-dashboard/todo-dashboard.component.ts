import { Component, OnInit } from '@angular/core';
import { todosArr } from 'src/app/const/todo.data';
import { ItodosArr } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  editTodo !: ItodosArr

  todosArr: Array<ItodosArr> = todosArr
 

  constructor() { }

  ngOnInit(): void {
  }

  getNewTodo(todo: ItodosArr) {
    todosArr.unshift(todo)
  }

  getEditTodo(todo: ItodosArr) {
    this.editTodo = todo
    
  }

  updateTodo(updateObj: ItodosArr){
    console.log(updateObj)
    let getIndex = todosArr.findIndex(t => t.todoId === updateObj.todoId)
    todosArr[getIndex] = updateObj
  }

  getRemoveTodo(id : string){
    let getIndex = todosArr.findIndex(t => t.todoId === id)
    todosArr.splice(getIndex, 1)
  } 

}
