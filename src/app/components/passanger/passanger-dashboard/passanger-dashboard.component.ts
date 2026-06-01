import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipassanger } from 'src/app/models/passanger';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-passanger-dashboard',
  templateUrl: './passanger-dashboard.component.html',
  styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassangerDashboardComponent implements OnInit {
passArr !:Ipassanger[]
checkInArr!:Ipassanger[]

  constructor(
private _passService: PassangerService 

  ) { }
  ngOnInit(): void {
    this.getpassanger()
  }

  getpassanger(){
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

}
