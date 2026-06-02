import { Injectable } from '@angular/core';
import { IRes, Istd, IstdRes } from '../models/student.three';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentThreeService {

  stdsArr: Array<Istd> = [
    {
      Fullname: "swara sharma",
      Email: "swara.sharma@gmail.com",
      contact: "8608976008",
      IsActive: false,
      id: '2'
    },
    {
      Fullname: "priya Rathod",
      Email: "priya.rathod@gmail.com",
      contact: "7896543456",
      IsActive: true,
      id: '3'
    },
    {
      Fullname: "jay shetty",
      Email: "jay.shetty@gmail.com",
      contact: "8765400006",
      IsActive: true,
      id: '4'
    },
    {
      Fullname: "raj shetty",
      Email: "raj.shetty@gmail.com",
      contact: "9090909090",
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
