import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IRes, Istd, IstdRes } from '../models/student-five';

@Injectable({
  providedIn: 'root'
})
export class StudentFiveService {

  stdsArr: Array<Istd> = [
    {
        Fullname: "paul walker",
        Email: "paul.walker@gmail.com",
        contact: "8989654753",
        IsActive: false,
        id: '5'
      },
      
    
    {
        Fullname:"mary rose",
        Email: "mary.rose@gmail.com",
        contact: "98076545343",
        IsActive: false,
        id: '2'
      },
      {
        Fullname: "john gay",
        Email: "john.gay@gmail.com",
        contact: "9087656890",
        IsActive: false,
        id: '3'
      },
      {
        Fullname: "mari nyse",
        Email: "mary.nyse@gmail.com",
        contact: "9897600982",
        IsActive: true,
        id: '4'
      },
      {
        Fullname: "vin disel",
        Email: "vin.disel@gmail.com",
        contact: "6767676789",
        IsActive: false,
        id: '5'
      }
      
  
    ];
    private editStdsub$: Subject<Istd> = new Subject()
      editStdobj$: Observable<Istd> = this.editStdsub$.asObservable()


  constructor( ) { }
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
