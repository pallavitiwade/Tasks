import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/models/student';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentServicesService } from 'src/app/services/student-services.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  isInEditMode:boolean=false

@ViewChild('stdForm') stdForm !: NgForm
editStd!:Istd
  
  constructor(
        private _stdService:StudentServicesService,
        private _snackBar:SnackbarService
    

  ) { }

  ngOnInit(): void {
    this.patchStdInfo()
  }

  onTodosubmit(){
    if(this.stdForm.valid){
      let New_std:Istd={
        ...this.stdForm.value,
      stdId:Date.now().toString()
        
      }
      this.stdForm.reset()
      this._stdService.AddTodo(New_std).subscribe({
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

  patchStdInfo(){
    this._stdService.editStdobj$.subscribe(std=>{
      console.log(std)
      this.isInEditMode=true
      this.editStd=std;
      this.stdForm.form.patchValue(std)
    })
  }


onUpdate(){
  if(this.stdForm.valid){
    let UPDATED_STD:Istd={
      ...this.stdForm.value,
      id:this.editStd.id
    }
    this._stdService.updatestudent(UPDATED_STD)
    .subscribe({
      next:res=>{
        this._snackBar.openSnackBar(res.msg)
        this.stdForm.reset()
        this.isInEditMode=false
      },
      error:err=>{
        this._snackBar.openSnackBar(err.error)
      }
    })
  }

}



}
