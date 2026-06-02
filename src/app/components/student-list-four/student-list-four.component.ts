import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentFourService } from 'src/app/services/student-four.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { Istd } from 'src/app/models/students-four';

@Component({
  selector: 'app-student-list-four',
  templateUrl: './student-list-four.component.html',
  styleUrls: ['./student-list-four.component.scss']
})
export class StudentListFourComponent implements OnInit {
stdsArr:Array<Istd>=[]

  constructor(
private _stdService:StudentFourService,
        private _matDialog:MatDialog,
        private _snackBar:SnackbarService

  ) { }

  ngOnInit(): void {

        this.FetchData()

  }

  FetchData(){
        this._stdService.fetchStd()
        .subscribe({
          next:data=>{
            this.stdsArr=data
          },
          error:err=>{console.log(err)
          
          }
        })
      }
      
      onRemove(id:string){
        let config=new MatDialogConfig()
        config.width='480px'
        config.disableClose=true;
        config.data=`are you sure you want to remove this student`
        let matRef=this._matDialog.open(GetConfirmComponent,config)
        matRef.afterClosed()
        .subscribe(getConfirm=>{
          if(getConfirm){
            this._stdService.RemoveStd(id)
            .subscribe({
              next:res=>{
                console.log(res)
                this._snackBar.openSnackBar(res.msg)
              },
              error:err=>{
                this._snackBar.openSnackBar(err.msg)
              }
            })
          }
        })
      
      }
      
      
      onEdit(std:Istd){
        this._stdService.emitEditStd(std)
      
      
      }

}
