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
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentTabalComponent } from './components/student-tabal/student-tabal.component';
import {MatCardModule} from '@angular/material/card';
import { PassangerModule } from './components/passanger/passanger/passanger.module';
import { TodoDashboardTwoComponent } from './components/todo-dashboard-two/todo-dashboard-two.component';
import { TodoFormTwoComponent } from './components/todo-form-two/todo-form-two.component';
import { TodoListTwoComponent } from './components/todo-list-two/todo-list-two.component';







@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTabalComponent,
    TodoDashboardTwoComponent,
    TodoFormTwoComponent,
      TodoListTwoComponent

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
    MatCardModule,
    PassangerModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
