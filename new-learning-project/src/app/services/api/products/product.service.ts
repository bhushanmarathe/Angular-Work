import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 20): Observable<any> {
    // Using template literals to construct the URL
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation>(productsUrl);
  }

  createProduct(
    product: ProductRepresentation
  ): Observable<ProductRepresentation> {
    const createUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(createUrl, product);
  }
}
