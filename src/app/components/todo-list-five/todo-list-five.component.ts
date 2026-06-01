import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItodoFi } from 'src/app/models/todo-five';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoFourService } from 'src/app/services/todo-four.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { TodoFiveService } from 'src/app/services/todo-five.service';

@Component({
  selector: 'app-todo-list-five',
  templateUrl: './todo-list-five.component.html',
  styleUrls: ['./todo-list-five.component.scss']
})
export class TodoListFiveComponent implements OnInit {
todosArrys:Array<ItodoFi>=[]

  constructor(

    private _matDialog:MatDialog,
      private _todoservicefive:TodoFiveService,
      private _snackBar:SnackbarService

  ) { }

  ngOnInit(): void {
        this.addTodo()


  }
  addTodo(){
     this._todoservicefive.fetchTodo()
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
          this._todoservicefive.removeTodos(id).subscribe({
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
    onEdit(todo:ItodoFi){
      console.log(todo)
      this._todoservicefive.editTodoSub$.next(todo)
    
    
    }
  



}
