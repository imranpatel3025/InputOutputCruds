import { Component, OnInit, Output, ViewChild, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItodosArr } from 'src/app/model/todo.model';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('todoForm') todoForm!: NgForm

  @Output() eveNewTodo: EventEmitter<ItodosArr> = new EventEmitter<ItodosArr>()

  @Input() getEditTodo !: ItodosArr

  isInEditMode: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let editTodo = changes['getEditTodo'].currentValue
    setTimeout(() => {
      if (editTodo) {
        this.todoForm.form.patchValue(editTodo)
        this.isInEditMode = true
      }
    });

  }

  onTodoAdd() {
    if (this.todoForm.invalid) {
      this.todoForm.form.markAllAsTouched()
    } else {
      let newTodo = this.todoForm.form.value;
      this.eveNewTodo.emit(newTodo)
      this.todoForm.reset()

    }
  }


}
