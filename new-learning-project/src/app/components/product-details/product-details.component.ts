import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../../services/api/models/product-representation';

@Component({
  selector: 'app-product-details',
  //standalone: true,
  //imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  @Input() // This decorator is used to mark a property as an input property
  product: ProductRepresentation = {};
}
