import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/models/student-five';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentFiveService } from 'src/app/services/student-five.service';

@Component({
  selector: 'app-student-form-five',
  templateUrl: './student-form-five.component.html',
  styleUrls: ['./student-form-five.component.scss']
})
export class StudentFormFiveComponent implements OnInit {

isInEditMode:boolean=false
  @ViewChild('stdForm') stdForm !: NgForm
  editStd!:Istd

  constructor(

    private _stdService: StudentFiveService ,
          private _snackBar:SnackbarService
  ) { }

  ngOnInit(): void {
            this.patchStdInfo()

  }
onstdsubmit(){
        if(this.stdForm.valid){
          let New_std:Istd={
            ...this.stdForm.value,
          stdId:Date.now().toString()
            
          }
          this.stdForm.reset()
          this._stdService.Addstudent(New_std).subscribe({
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
