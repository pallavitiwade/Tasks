import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.scss']
})
export class PassangerCountComponent implements OnInit {
@Input() totalCount!:number
@Input() checkInCount!:number


  constructor() {}
 ngOnChanges(changes:SimpleChange):void{
  console.log(changes)
}
  ngOnInit(): void {
  }

}
