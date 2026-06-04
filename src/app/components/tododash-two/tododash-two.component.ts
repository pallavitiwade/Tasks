import { Component, OnInit } from '@angular/core';
import { Itodos } from 'src/app/models/todo-twoI/O';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-tododash-two',
  templateUrl: './tododash-two.component.html',
  styleUrls: ['./tododash-two.component.scss']
})
export class TododashTwoComponent implements OnInit {

  todosArr:Array<Itodos>=[
        {
        todoItem: "School",
        todoId: '1'
      },
      {
        todoItem: "Class",
        todoId: '2'
      },
      {
        todoItem: "Task",
        todoId: '3'
      },
      {
        todoItem: "Homework",
        todoId: '4'
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
    
    