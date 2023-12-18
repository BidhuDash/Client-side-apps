import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slogan:String = 'yahan nahi toh kahei nahi ';
  imgPath:String = '../../assets/img2.png';
  imgPath2:String='../../assets/img3.png';

  displaySlogan(){
    return 'This is the new slogan for the website';
    //return this.slogan; 
  }

}
