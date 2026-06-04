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
import { TodoThreeDashboardComponent } from './components/todo-three-dashboard/todo-three-dashboard.component';
import { TodoFormThreeComponent } from './components/todo-form-three/todo-form-three.component';
import { TodoListThreeComponent } from './components/todo-list-three/todo-list-three.component';
import { TodoDashboardFourComponent } from './components/todo-dashboard-four/todo-dashboard-four.component';
import { TodoFormFourComponent } from './components/todo-form-four/todo-form-four.component';
import { TodoListFourComponent } from './components/todo-list-four/todo-list-four.component';
import { TodoDashboardFiveComponent } from './components/todo-dashboard-five/todo-dashboard-five.component';
import { TodoFormFiveComponent } from './components/todo-form-five/todo-form-five.component';
import { TodoListFiveComponent } from './components/todo-list-five/todo-list-five.component';
import { StudentDashboardTwoComponent } from './components/student-dashboard-two/student-dashboard-two.component';
import { StudentFormTwoComponent } from './components/student-form-two/student-form-two.component';
import { StudentListTwoComponent } from './components/student-list-two/student-list-two.component';
import { StudentDashThreeComponent } from './components/student-dash-three/student-dash-three.component';
import { StudentFormThreeComponent } from './components/student-form-three/student-form-three.component';
import { StudentListThreeComponent } from './components/student-list-three/student-list-three.component';
import { StudentDashFourComponent } from './components/student-dash-four/student-dash-four.component';
import { StudentFormFourComponent } from './components/student-form-four/student-form-four.component';
import { StudentListFourComponent } from './components/student-list-four/student-list-four.component';
import { StudentDashFiveComponent } from './components/student-dash-five/student-dash-five.component';
import { StudentFormFiveComponent } from './components/student-form-five/student-form-five.component';
import { StudentListFiveComponent } from './components/student-list-five/student-list-five.component';
import { OComponent } from './components/todo-dash-first-I/o/o.component';
import { formComponent } from './components/todo-form-first-I/o/o.component';
import { ODashboardComponent } from './components/todoI/o-dashboard/o-dashboard.component';
import { OFormComponent } from './components/todoI/o-form/o-form.component';
import { OListComponent } from './components/todoI/o-list/o-list.component';
import { TododashTwoComponent } from './components/tododash-two/tododash-two.component';
import { TodoformTwoComponent } from './components/todoform-two/todoform-two.component';
import { TodolistTwoComponent } from './components/todolist-two/todolist-two.component';
import { TododashThreeComponent } from './components/tododash-three/tododash-three.component';
import { TodoformThreeComponent } from './components/todoform-three/todoform-three.component';
import { TodolistThreeComponent } from './components/todolist-three/todolist-three.component';







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
      TodoListTwoComponent,
      TodoThreeDashboardComponent,
      TodoFormThreeComponent,
      TodoListThreeComponent,
      TodoDashboardFourComponent,
      TodoFormFourComponent,
      TodoListFourComponent,
      TodoDashboardFiveComponent,
      TodoFormFiveComponent,
      TodoListFiveComponent,
      StudentDashboardTwoComponent,
      StudentFormTwoComponent,
      StudentListTwoComponent,
      StudentDashThreeComponent,
      StudentFormThreeComponent,
      StudentListThreeComponent,
      StudentDashFourComponent,
      StudentFormFourComponent,
      StudentListFourComponent,
      StudentDashFiveComponent,
      StudentFormFiveComponent,
      StudentListFiveComponent,
      OComponent,
      formComponent,
      TodoListComponent,
      ODashboardComponent,
      OFormComponent,
      OListComponent,
      TododashTwoComponent,
      TodoformTwoComponent,
      TodolistTwoComponent,
      TododashThreeComponent,
      TodoformThreeComponent,
      TodolistThreeComponent


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
