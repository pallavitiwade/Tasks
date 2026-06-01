import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItodoF } from 'src/app/models/todo-four';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoFourService } from 'src/app/services/todo-four.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list-four',
  templateUrl: './todo-list-four.component.html',
  styleUrls: ['./todo-list-four.component.scss']
})
export class TodoListFourComponent implements OnInit {
todosArrys:Array<ItodoF>=[]

  constructor(
    private _matDialog:MatDialog,
      private _todoservicethree:TodoFourService,
      private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
    this.addTodo()

  }
addTodo(){
   this._todoservicethree.fetchTodo()
      .subscribe({
        next:data =>{
          this.todosArrys=data
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
  onEdit(todo:ItodoF){
    console.log(todo)
    this._todoservicethree.editTodoSub$.next(todo)
  
  
  }

}







