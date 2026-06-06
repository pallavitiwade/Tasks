import { Component, OnInit } from '@angular/core';
import { IEnumProduct, Iproduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

 ProductArr !: Iproduct[]
ProductEnum = IEnumProduct
  constructor( private productservice : ProductService) { }

  ngOnInit(): void {
    this.productservice.fetchproducts()
    .subscribe({
      next : data => {
        this.ProductArr = data
      }
    })
  }

  onPstatusChange(pId : string ,Productstatus : IEnumProduct){
    this.productservice.statuschange(pId,Productstatus)

  }

  trackByFun(index : number, product : Iproduct){
    return product.pId
  }

}