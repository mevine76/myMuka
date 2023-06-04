import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProducts() {
    throw new Error('Method not implemented.');
  }

  API_KEY = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json';

  constructor(private httpClient: HttpClient) { }

  public getProducts1() {
    return this.httpClient.get<any>('https://world.openfoodfacts.org/api/v0/product/737628064502.json');
  }
}
