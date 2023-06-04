import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  products: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getProducts1().subscribe(response => {
      console.log(response);
      this.products = response;
    })
  }

}
