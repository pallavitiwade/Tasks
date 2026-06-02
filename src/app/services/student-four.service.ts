import { Injectable } from '@angular/core';
import { IRes, Istd, IstdRes } from '../models/students-four';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentFourService {

stdsArr: Array<Istd> = [
    {
      Fullname:"Rohan roy",
      Email: "rohan.roy@gmail.com",
      contact: "98076545343",
      IsActive: false,
      id: '2'
    },
    {
      Fullname: "Riya singh",
      Email: "riya.singh@gmail.com",
      contact: "9087656890",
      IsActive: true,
      id: '3'
    },
    {
      Fullname: "kareena shaha",
      Email: "kay.shaha@gmail.com",
      contact: "9865432189",
      IsActive: true,
      id: '4'
    },
    {
      Fullname: "rudra naik",
      Email: "rudra.naik@gmail.com",
      contact: "8080808080",
      IsActive: false,
      id: '5'
    }
    

  ];

  private editStdsub$: Subject<Istd> = new Subject()
  editStdobj$: Observable<Istd> = this.editStdsub$.asObservable()

  constructor() { }
  emitEditStd(std: Istd) {
    this.editStdsub$.next(std)

  }
  fetchStd(): Observable<Istd[]> {
    return of(this.stdsArr)
  }
  Addstudent(student: Istd): Observable<IstdRes> {
    {
      this.stdsArr.push(student)
      let res = {
        msg: `New student ${student.Fullname} Added Successfully !!!`,
        data: student
      }
      return of(res)

    }
  }

  RemoveStd(id: string): Observable<IRes<Istd>> {
    let GET_INDEX = this.stdsArr.findIndex(s => s.id === id);
    let RemoveStd = this.stdsArr.splice(GET_INDEX, 1)

    return of({
      msg: `The Student with id ${id} removed successfully !!!`,
      data: RemoveStd[0]
    })
  }

  updatestudent(updatestd: Istd): Observable<IstdRes> {
    let GET_INDEX = this.stdsArr.findIndex(s => s.id === updatestd.id)
    this.stdsArr[GET_INDEX] = updatestd
    return of({
      msg: `The Student ${updatestd.Fullname} Updated successfully !!!`,
      data: updatestd
    })
  }














}
