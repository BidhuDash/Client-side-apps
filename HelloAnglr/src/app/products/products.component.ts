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
    {id:1, name: 'Apple' , price:'50', available:'Available',image:'/assets/Products_Images/apple.jpg'},
    {id:2, name: 'Egg' , price:'20', available:'Available',image:'/assets/Products_Images/eggs.webp'},
    {id:3, name: 'Carrot' , price:'60', available:'Not Available',image:'/assets/Products_Images/carrot.jpg'},
    {id:4, name: 'Floor' , price:'25', available:'Available',image:'/assets/Products_Images/floor.webp'},
    {id:5, name: 'Honey' , price:'45', available:'Not Available',image:'/assets/Products_Images/honey.jpg'},
    {id:6, name: 'Milk' , price:'15', available:'Available',image:'/assets/Products_Images/milk.jpg'},
    {id:7, name: 'Mixed Vegetable' , price:'22', available:'Available',image:'/assets/Products_Images/mixed-veg.webp'},
    {id:8, name: 'Potato' , price:'8', available:'Available',image:'/assets/Products_Images/potato.jpg'},
    {id:9, name: 'Tomato' , price:'6', available:'Not Available',image:'/assets/Products_Images/tomato.webp'},
    {id:10, name: 'Rice' , price:'12', available:'Not Available',image:'/assets/Products_Images/rice.jpg'}
  ]

}
