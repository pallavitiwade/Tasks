import { Component, OnInit } from '@angular/core';
import { Itodos } from 'src/app/models/todo-I/0-first';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-o',
  templateUrl: './o.component.html',
  styleUrls: ['./o.component.scss']
})
export class OComponent implements OnInit {

    todosArr:Array<Itodos>=[
    {
    todoItem: "angular",
    todoId: '1',
    isComplted: false
  },
  {
    todoItem: "JavaScript",
    todoId: '2',
    isComplted: true
  },
  {
    todoItem: "TypeScript",
    todoId: '3',
    isComplted: false
  },
  {
    todoItem: "Mongodb",
    todoId: '4',
    isComplted: true
  }
 
]
editTodoObj!:Itodos
  constructor(
    private _snackBar:SnackbarService

  ) { }

  ngOnInit(): void {
  }

  getNewTodo(todo:Itodos){
  this.todosArr.push(todo)

  this._snackBar.openSnackBar(`The Todo Item ${todo.todoItem} is Added Successfully !!!`)
}

getRemovedId(id:string){
  let getIndex=this.todosArr.findIndex(t=>t.todoId===id)
  let remove=this.todosArr.splice(getIndex,1)
      this._snackBar.openSnackBar(`The Todo Item ${remove[0].todoItem} is Removed Successfully !!!`)

}

getEditTodo(editTodo:Itodos){
  this.editTodoObj=editTodo

}
emitUpdateTodo(Update:Itodos){
  let GET_Index=this.todosArr.findIndex(t=>t.todoId===Update.todoId)
  this.todosArr[GET_Index]=Update
    this._snackBar.openSnackBar(`The Todo Item ${Update.todoItem} is updated Successfully !!!`)
}

}
