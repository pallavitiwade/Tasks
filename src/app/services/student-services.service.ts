import { Injectable } from '@angular/core';
import { IRes, Istd, IstdRes } from '../models/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  
stdsArr:Array<Istd>= [
      {
        Fullname: "Amit Sharma",
        Email: "amit.sharma@gmail.com",
        contact: "9876543210",
        IsActive: true,
        id: '2'
      },
      {
        Fullname: "Priya Verma",
        Email: "priya.verma@gmail.com",
        contact: "9123456780",
        IsActive: true,
        id: '3'
      },
      {
        Fullname: "Rahul Patil",
        Email: "rahul.patil@gmail.com",
        contact: "9988776655",
        IsActive: false,
        id: '4'
      },
      {
        Fullname: "Sneha Kulkarni",
        Email: "sneha.kulkarni@gmail.com",
        contact: "9090909090",
        IsActive: true,
        id: '5'
      },
      {
        Fullname: "Vikas Singh",
        Email: "vikas.singh@gmail.com",
        contact: "9871234567",
        IsActive: false,
        id: '6'
      }
    ];

  private editStdsub$:Subject<Istd>=new Subject()
  editStdobj$:Observable<Istd>=this.editStdsub$.asObservable()

  constructor() { }
  emitEditStd(std:Istd){
    this.editStdsub$.next(std)
  }


fetchStd():Observable<Istd[]>{
  return of (this.stdsArr)
}

AddTodo(student:Istd):Observable<IstdRes>{
  {
    this.stdsArr.push(student)
    let res={
      msg:`New student ${student.Fullname} Added Successfully !!!`,
      data:student
    }
    return of(res)

  }
}

RemoveStd(id:string):Observable<IRes<Istd>>{
  let GET_INDEX=this.stdsArr.findIndex(s=>s.id===id);
  let RemoveStd=this.stdsArr.splice(GET_INDEX,1)

  return of({
    msg:`The Student with id ${id} removed successfully !!!`,
    data:RemoveStd[0]
  })
}

updatestudent(updatestd:Istd):Observable<IstdRes>{
  let GET_INDEX=this.stdsArr.findIndex(s=>s.id===updatestd.id)
  this.stdsArr[GET_INDEX]=updatestd
  return of({
    msg:`The Student ${updatestd.Fullname} Updated successfully !!!`,
    data:updatestd
  })
}



}
