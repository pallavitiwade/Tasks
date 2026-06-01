import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodos } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todosArr:Array<Itodos>=[]
  constructor(
    private _TodoService:TodoService,
     private _matDialog:MatDialog,
         private _snackBar:SnackbarService

  ) { }

  ngOnInit(): void {
   this.AddData()
  }

  AddData(){
      this._TodoService.fetchTodos()
    .subscribe({
      next:data =>{
        this.todosArr=data
      },
      error:err=>{console.log(err)}
    })
  }
onRemove(id:string){
  let matConfig=new MatDialogConfig()
  matConfig.width='350px',
  matConfig.disableClose=true
  matConfig.data=`are you sure?`
  let matRef=this._matDialog.open(GetConfirmComponent, matConfig)

  matRef.afterClosed().subscribe(res=>{
    if(res){
      this._TodoService.removeTodo(id).subscribe({
        next:res=>{
          this._snackBar.openSnackBar(res.msg)
        },
        error:err=>{
            this._snackBar.openSnackBar(err.msg)

        }

      })
    }
  })


}

onEditTodo(todo:Itodos){
  console.log(todo)
  this._TodoService.editTodoSub$.next(todo)


}




}
