import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Itodos } from 'src/app/models/todo-twoI/O';

@Component({
  selector: 'app-todolist-two',
  templateUrl: './todolist-two.component.html',
  styleUrls: ['./todolist-two.component.scss']
})
export class TodolistTwoComponent implements OnInit {

  @Input()getTodos!:Array<Itodos>
    @Output()emitRemovedId:EventEmitter<string>=new EventEmitter<string>()
    @Output()emitEditTodo:EventEmitter<Itodos>=new EventEmitter<Itodos>()
    
    
      constructor(
         private _matdialog:MatDialog,
        private _snackBar:SnackbarService
        
      ) { }
      ngOnInit():void{
    
      }
      onTodoRemove(id:string){
        //let getConfirm=confirm(`Are You Sure?`)
       
          let Config=new MatDialogConfig()
           Config.width='250px',
           Config.disableClose=true
    
           let MatDialogRef=this._matdialog.open(GetConfirmComponent, Config)
           MatDialogRef.afterClosed().subscribe(getConfirm=>{
            if(getConfirm===true){
               this.emitRemovedId.emit(id)
    
            }
           })
          }
          onEdit(editTodo:Itodos) {
    this.emitEditTodo.emit(editTodo)
    
    }
    }
    