import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }
  deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    });
  }
}
