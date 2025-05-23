import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/api/products/product.service';
import { ProductRepresentation } from '../../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
// export class AboutComponent implements OnInit {
//   // The constructor is used to inject the ActivatedRoute service
//   // which provides access to the route information.
//   // The ActivatedRoute service is used to get the current route
//   // and its parameters.
//   constructor(private activatedRoute: ActivatedRoute) {}
//   param: any;
//   queryParam: any;

//   ngOnInit(): void {
//     // You can use the param here if needed
//     console.log(this.activatedRoute);
//     this.param = this.activatedRoute.snapshot.params['username'];
//     this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
//   }
// }
export class AboutComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    // this.service.getAllProductsWithLimit(5).subscribe((data) => {
    //   console.log(data);
    //   // initialization logic here
    // });
    // You can use the param here if needed

    const product: ProductRepresentation = {
      id: 1,
      title: 'Product Title',
      price: 100,
      description: 'Product Description',
      category: 'Product Category',
      image: 'https://example.com/image.jpg',
    };
    this.service.createProduct(product).subscribe({
      next: (data) => {
        console.log('Product created successfully:', data);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error creating product:', error);
      },
    });
  }
}
