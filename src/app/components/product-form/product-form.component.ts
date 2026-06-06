import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('ProductForm') ProductForm !: NgForm
  constructor(private productservice : ProductService,
              private snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onproductsubmit(){
    if(this.ProductForm.valid){
      let proobj : Iproduct = {
        ...this.ProductForm.value, pId : Date.now().toString()
      }
      this.ProductForm.reset()
      this.productservice.onproductadd(proobj)
      .subscribe({
        next : data => this.snackbar.openSnackBar(data.msg),
        error : err => this.snackbar.openSnackBar(err.msg)
      })
    }

  }

}