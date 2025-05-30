import { Component, NgModule } from '@angular/core';
import { ProductRepresentation } from '../../services/api/models/product-representation';
import { ProductService } from '../../services/api/products/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  //imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (result) => {
        this.router.navigate(['products']);
      },
    });
  }
}
