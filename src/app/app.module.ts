import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './components/get-confirm/get-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,


  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    CommonModule,
     FormsModule,
     MatIconModule,
     MatDialogModule,
     MatSnackBarModule,
         BrowserAnimationsModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
