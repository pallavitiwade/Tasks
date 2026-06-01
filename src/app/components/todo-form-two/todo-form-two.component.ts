import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from 'src/app/models/todo';
import { Itodo } from 'src/app/models/todo-two';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodoTwoService } from 'src/app/services/todo-two.service';

@Component({
  selector: 'app-todo-form-two',
  templateUrl: './todo-form-two.component.html',
  styleUrls: ['./todo-form-two.component.scss']
})
export class TodoFormTwoComponent implements OnInit {

  @ViewChild('todoForm') todoForm!:NgForm
isInEditMode:boolean=false
  editTodo!:Itodo



  constructor(
    private _todoservicetwo:TodoTwoService,
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
     this._todoservicetwo.addTodos(New_Todo).subscribe({
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
  this._todoservicetwo.editTodoSub$.subscribe({
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
    let UPDATED_OBJ:Itodos={
      ...this.todoForm.value,
      todoId:this.editTodo.todoId
    }
    console.log(UPDATED_OBJ)
    this._todoservicetwo.UpdateTodo(UPDATED_OBJ)
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





