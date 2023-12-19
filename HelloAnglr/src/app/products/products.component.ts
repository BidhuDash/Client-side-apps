import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id:1, name: 'Apple' , price:'50', availability:'Available',image:'/assets/Products_Images/apple.jpg'},
    {id:2, name: 'Egg' , price:'20', availability:'Available',image:'/assets/Products_Images/eggs.webp'},
    {id:3, name: 'Carrot' , price:'60', availability:'Not Available',image:'/assets/Products_Images/carrot.jpg'},
    {id:4, name: 'Floor' , price:'25', availability:'Available',image:'/assets/Products_Images/floor.webp'},
    {id:5, name: 'Honey' , price:'45', availability:'Not Available',image:'/assets/Products_Images/honey.jpg'},
    {id:6, name: 'Milk' , price:'15', availability:'Available',image:'/assets/Products_Images/milk.jpg'},
    {id:7, name: 'Mixed Vegetable' , price:'22', availability:'Available',image:'/assets/Products_Images/mixed-veg.webp'},
    {id:8, name: 'Potato' , price:'8', availability:'Available',image:'/assets/Products_Images/potato.jpg'},
    {id:9, name: 'Tomato' , price:'6', availability:'Not Available',image:'/assets/Products_Images/tomato.webp'},
    {id:10, name: 'Rice' , price:'12', availability:'Not Available',image:'/assets/Products_Images/rice.jpg'}
  ]

  getAllProducts(){
    return this.products.length;
  }

  getAvailableProducts(){
    return this.products.filter(products => products.availability === 'Available').length;
  }

  getNotAvailableProducts(){
    return this.products.filter(products => products.availability === 'Not Available').length;
  }

  productCountRadioButton:string = 'All';

  onFilterRadioButtonChange(data : string){
    this.productCountRadioButton = data;
    console.log(this.productCountRadioButton);
  }

}
