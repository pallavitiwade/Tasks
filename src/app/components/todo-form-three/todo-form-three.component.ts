import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todo-three';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoThreeService } from 'src/app/services/todo-three.service';

@Component({
  selector: 'app-todo-form-three',
  templateUrl: './todo-form-three.component.html',
  styleUrls: ['./todo-form-three.component.scss']
})
export class TodoFormThreeComponent implements OnInit {

@ViewChild('todoForm') todoForm!:NgForm
isInEditMode:boolean=false
  editTodo!:Itodo

  constructor(
     private _todoservicethree:TodoThreeService ,
            private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
            this.onTodopatch()

  }
onTodoSubmit(){
  if(this.todoForm.valid){
    let New_Todo:Itodo={
      ...this.todoForm.value,
      todoId:Date.now().toString()
    }
     this.todoForm.reset()
     this._todoservicethree.addTodos(New_Todo).subscribe({
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
  this._todoservicethree.editTodoSub$.subscribe({
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
    let UPDATED_OBJ:Itodo={
      ...this.todoForm.value,
      todoId:this.editTodo.todoId
    }
    console.log(UPDATED_OBJ)
    this._todoservicethree.UpdateTodo(UPDATED_OBJ)
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
