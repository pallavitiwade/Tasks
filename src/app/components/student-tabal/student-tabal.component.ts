import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Istd } from 'src/app/models/student';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentServicesService } from 'src/app/services/student-services.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student-tabal',
  templateUrl: './student-tabal.component.html',
  styleUrls: ['./student-tabal.component.scss']
})
export class StudentTabalComponent implements OnInit {
stdsArr:Array<Istd>=[]


  constructor(
    private _stdService:StudentServicesService,
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
