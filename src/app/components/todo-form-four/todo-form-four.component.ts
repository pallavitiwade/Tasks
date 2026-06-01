import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItodoF } from 'src/app/models/todo-four';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoFourService } from 'src/app/services/todo-four.service';

@Component({
  selector: 'app-todo-form-four',
  templateUrl: './todo-form-four.component.html',
  styleUrls: ['./todo-form-four.component.scss']
})
export class TodoFormFourComponent implements OnInit {



  @ViewChild('todoForm') todoForm!:NgForm
  isInEditMode:boolean=false
    editTodo!:ItodoF
  constructor(
      private _TodoService:TodoFourService,
        private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
        this.onTodopatch()

  }
  onTodoSubmit(){
      console.log(this.todoForm.value)
      if(this.todoForm.valid){
       let New_Todo:ItodoF={
          ...this.todoForm.value,
          todoId:Date.now().toString()
        }
      
       this.todoForm.reset()
       this._TodoService.addTodos(New_Todo).subscribe({
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
    this._TodoService.editTodoSub$.subscribe({
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
      let UPDATED_OBJ:ItodoF={
        ...this.todoForm.value,
        todoId:this.editTodo.todoId
      }
      console.log(UPDATED_OBJ)
      this._TodoService.UpdateTodo(UPDATED_OBJ)
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
