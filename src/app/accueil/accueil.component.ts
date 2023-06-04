import { Component, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

interface ProductData {
  product: {
    image_url: string;
    ingredients_text: string;
    allergens: string;
    nova_group: string;
    nutrition_grade_fr: string;
    ingredients_from_palm_oil_n: string;
    generic_name: string;
    abbreviated_product_name: string;

  };
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  public foodPhoto : string;
  public foodIngredients : string;
  public foodAllergens : string;
  public foodNova : string;
  public foodNutritional : string;
  public foodPalm : string;
  public foodInfos : string;
  public foodDescription : string;

  
  champSaisi = new FormControl('');
  data: any;

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.foodPhoto = 'foodPhoto';
    this.foodIngredients = 'foodIngredients';
    this.foodAllergens = 'foodAllergens';
    this.foodNova = 'foodNova';
    this.foodNutritional = 'foodNutritional';
    this.foodPalm = 'foodPalm';
    this.foodInfos = 'foodInfos';
    this.foodDescription = 'foodDescription';

  }

    public afficherChampSaisi() {
      return this.http.get<ProductData>('https://world.openfoodfacts.org/api/v0/product/' + this.champSaisi.value)
      .subscribe((data) => {
        console.log(data)
        this.foodPhoto = data.product.image_url,
        this.foodIngredients = data.product.ingredients_text,
        this.foodAllergens = data.product.allergens,
        this.foodNova = data.product.nova_group,
        this.foodNutritional = data.product.nutrition_grade_fr,
        this.foodPalm = data.product.ingredients_from_palm_oil_n,
        this.foodInfos = data.product.generic_name
        this.foodDescription = data.product.abbreviated_product_name

      })
      
    }

  // ngOnInit(): void {
  //   this.apiService.getProduct().subscribe((data) => {
  //     this.data = data;
  //   })

  //   }

  // }

  }
