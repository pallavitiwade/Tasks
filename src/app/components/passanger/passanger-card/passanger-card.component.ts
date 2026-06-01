import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ipassanger } from 'src/app/models/passanger';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-passanger-card',
  templateUrl: './passanger-card.component.html',
  styleUrls: ['./passanger-card.component.scss']
})
export class PassangerCardComponent implements OnInit {
  @Input()passObj!:Ipassanger
isInEditMode:boolean=false
@ViewChild('fullname') fullname !:ElementRef

  constructor(
    private _passService: PassangerService 
    
  ) { }

  ngOnInit(): void {
  }

}
