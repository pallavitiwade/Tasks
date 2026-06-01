import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todo-two';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoTwoService } from 'src/app/services/todo-two.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list-two',
  templateUrl: './todo-list-two.component.html',
  styleUrls: ['./todo-list-two.component.scss']
})
export class TodoListTwoComponent implements OnInit {
todosArry:Array<Itodo>=[]

  constructor(
     private _matDialog:MatDialog,

        private _todoservicetwo:TodoTwoService,
                 private _snackBar:SnackbarService
        
    
  ) { }

  ngOnInit(): void {
this.addTodo()
  }
addTodo(){
 this._todoservicetwo.fetchTodo()
    .subscribe({
      next:data =>{
        this.todosArry=data
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
      this._todoservicetwo.removeTodos(id).subscribe({
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
onEdit(todo:Itodo){
  console.log(todo)
  this._todoservicetwo.editTodoSub$.next(todo)


}



}

