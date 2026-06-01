import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassangerDashboardComponent } from '../passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from '../passanger-count/passanger-count.component';
import { PassangerCardComponent } from '../passanger-card/passanger-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';






@NgModule({
  declarations: [
     PassangerDashboardComponent,
     PassangerCountComponent,
     PassangerCardComponent,




  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
      MatCardModule,
      MatDividerModule







  ],
  exports:[
    PassangerDashboardComponent
  ]
})
export class PassangerModule { }
