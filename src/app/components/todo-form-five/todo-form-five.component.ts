import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItodoFi } from 'src/app/models/todo-five';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoFiveService } from 'src/app/services/todo-five.service';

@Component({
  selector: 'app-todo-form-five',
  templateUrl: './todo-form-five.component.html',
  styleUrls: ['./todo-form-five.component.scss']
})
export class TodoFormFiveComponent implements OnInit {


  @ViewChild('todoForm') todoForm!:NgForm
  isInEditMode:boolean=false
    editTodo!:ItodoFi

  constructor(
    private _TodoServicefive:TodoFiveService,
     private _snackBar:SnackbarService

  ) { }

  ngOnInit(): void {
     this.onTodopatch()

  }

  onTodoSubmit(){
        console.log(this.todoForm.value)
        if(this.todoForm.valid){
         let New_Todo:ItodoFi={
            ...this.todoForm.value,
            todoId:Date.now().toString()
          }
        
         this.todoForm.reset()
         this._TodoServicefive.addTodos(New_Todo).subscribe({
           next:data=>{
            console.log(data)
            this._snackBar.openSnackBar(data.msg)
           },
           error:err=>{
             console.log(err)
           }
         })
    
      }
    
    }
    
    onTodopatch(){
      this._TodoServicefive.editTodoSub$.subscribe({
        next:data=>{
          console.log(data);
          this.isInEditMode=true;
          this.editTodo=data
          this.todoForm.form.patchValue(data)
        }
      })
    }
    
    
    onUpdate(){
      if(this.todoForm.valid){
        let UPDATED_OBJ:ItodoFi={
          ...this.todoForm.value,
          todoId:this.editTodo.todoId
        }
        console.log(UPDATED_OBJ)
        this._TodoServicefive.UpdateTodo(UPDATED_OBJ)
        .subscribe({
          next:res=>{
            this._snackBar.openSnackBar(res.msg)
            this.todoForm.reset()
            this.isInEditMode=false;
          },
          error:err=>{
            this._snackBar.openSnackBar(err)
          }
        })
      }
    
    } 

}
