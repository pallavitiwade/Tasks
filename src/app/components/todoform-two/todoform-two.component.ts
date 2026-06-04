import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from 'src/app/models/todo-twoI/O';
import { OService } from 'src/app/services/todo-I/o.service';

@Component({
  selector: 'app-todoform-two',
  templateUrl: './todoform-two.component.html',
  styleUrls: ['./todoform-two.component.scss']
})
export class TodoformTwoComponent implements OnInit {

   @ViewChild('todoItem') todoItem!: ElementRef
    @ViewChild('isComplted') isComplted!: ElementRef
    @Input() getEditObj!:Itodos
    @Output() emitNewTodo: EventEmitter<Itodos> = new EventEmitter<Itodos>()
    @Output() emitUpdateTodo: EventEmitter<Itodos> = new EventEmitter<Itodos>()
    isInEditMode: boolean = false;
  
    constructor(
  private _todoService:OService
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if (!!changes['getEditObj'].currentValue) {
        this.isInEditMode = true
        this.todoItem.nativeElement.value = this.getEditObj.todoItem
      }
  
    }
  
    ngOnInit(): void {
            console.log(this.getEditObj)
  
  
    }
    onTodoAdd() {
      let todo: Itodos = {
        todoItem:this.todoItem.nativeElement.value,
        todoId:this._todoService.uuid()
      }
      console.log(todo)
      this.todoItem.nativeElement.value = ''
  
      this.emitNewTodo.emit(todo)
    }
    onTodoUpdate() {
      let UPDATE_OBJ: Itodos = {
        todoItem: this.todoItem.nativeElement.value,
        todoId: this.getEditObj.todoId
  
      }
      this.emitUpdateTodo.emit(UPDATE_OBJ)
      this.todoItem.nativeElement.value = ''
      this.isInEditMode = false
    }
  }
  
  
  
  
  
  
  
  
  