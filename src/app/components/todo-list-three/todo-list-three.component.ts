import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo-three';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoThreeService } from 'src/app/services/todo-three.service';

@Component({
  selector: 'app-todo-list-three',
  templateUrl: './todo-list-three.component.html',
  styleUrls: ['./todo-list-three.component.scss']
})
export class TodoListThreeComponent implements OnInit {
todosArry:Array<Itodo>=[]

  constructor(
  private _matDialog:MatDialog,

        private _todoservicethree:TodoThreeService,
                 private _snackBar:SnackbarService

  ) { }

  ngOnInit(): void {
this.addTodo()



  }

 addTodo(){
   this._todoservicethree.fetchTodo()
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
        this._todoservicethree.removeTodos(id).subscribe({
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
    this._todoservicethree.editTodoSub$.next(todo)
  
  
  }

}
