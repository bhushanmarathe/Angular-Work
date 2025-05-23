import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../../services/api/products/product.service';
import { ProductRepresentation } from '../../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  //standalone: true,
  //imports: [ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: ProductRepresentation[] = []; // Initialize products as an empty array
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    // this.service.getAllProductsWithLimit(5).subscribe((data) => {
    //   console.log(data);
    //   // initialization logic here
    // });
    // You can use the param here if needed

    this.service.getAllProductsWithLimit().subscribe({
      next: (data) => {
        console.log('Product created successfully:', data);
        this.products = data; // Assign the response data to the products array
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error creating product:', error);
      },
    });
  }
}
