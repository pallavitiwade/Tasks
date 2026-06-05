import { Component, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/models/passanger-two';
import { PassangerTwoService } from 'src/app/services/passanger-two.service';

@Component({
  selector: 'app-passanger-dash-two',
  templateUrl: './passanger-dash-two.component.html',
  styleUrls: ['./passanger-dash-two.component.scss']
})
export class PassangerDashTwoComponent implements OnInit {

  passArr !: Ipassanger[]
  checkInArr!:Ipassanger[]
    constructor(
  private _passService:PassangerTwoService
  
    ) { }
  
    ngOnInit(): void {
     this.getPassanger()
     this.getCheckInCount()
    }
    getPassanger(){
       this._passService.fetchpassanger()
      .subscribe({
        next:data=>{
          this.passArr=data
        },
        error:err=>{
          console.log(err)
        }
      })
    }
  
    getCheckInCount(){
     this.checkInArr=this.passArr.filter(p=>{
        return p.checkedIn
      })
    }
  getRemoveFlag(flag:boolean){
    this.getCheckInCount()
  
  
  }
  
  
  }
  