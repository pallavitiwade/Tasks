import { Component, OnInit } from '@angular/core';
import { Itodos } from 'src/app/models/todothree';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-tododash-three',
  templateUrl: './tododash-three.component.html',
  styleUrls: ['./tododash-three.component.scss']
})
export class TododashThreeComponent implements OnInit {

  todosArr:Array<Itodos>=[
          {
          todoItem: "shooping",
          todoId: '1'
        },
        {
          todoItem: "office",
          todoId: '2'
        },
        {
          todoItem: "stores",
          todoId: '3'
        },
        {
          todoItem: "garden",
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
      
      