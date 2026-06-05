import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-passanger-count-two',
  templateUrl: './passanger-count-two.component.html',
  styleUrls: ['./passanger-count-two.component.scss']
})
export class PassangerCountTwoComponent implements OnInit {

  @Input() totalCount!:number
    @Input() checkInCount!:number
    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
    }
  
    ngOnInit(): void {
    }
  
  }
  