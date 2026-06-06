import { Injectable } from '@angular/core';
import { IEnumProduct, Iproduct, IRes } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

productArr : Array<Iproduct> = [
    {
      pName:'Samsung M31',
      Pdetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library',
      pStatus:IEnumProduct.Inprogress,
      pId:'123'
    },
     {
      pName:'Iphone 16',
      Pdetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quas.Lorem Ipsum is simply ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library',
      pStatus:IEnumProduct.Dispatch,
      pId:'1235'
    },

     {
      pName:'One plus',
      Pdetail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quas.Lorem Ipsum is when designers at Letraset and James Mosley, the librarian at St Bride Printing Library',
      pStatus:IEnumProduct.Delivered,
      pId:'126663'
    },
  ];
  constructor() { }
  fetchproducts() :Observable<Iproduct[]>{
    return of(this.productArr)
  }

  statuschange(pId : string, Productstatus : IEnumProduct){
    this.productArr.forEach(obj =>{
      if(obj.pId === pId){
        obj.pStatus = Productstatus
      }
    })
  }

  onproductadd(proobj : Iproduct) : Observable<IRes<Iproduct>>{
    this.productArr.push(proobj)
    return of({
      msg : `The New Product Is ${proobj.pName} Is Added Successfully !!`,
      data : proobj
    })
  }
}
  