import { Component, OnInit } from '@angular/core';

@Component({
  selector:  '.app-navigation',  // this type is used as a css class
            //  '[app-navigation]', // this type is used as a html attribute
            // 'app-navigation',  // this selector is used a html tag
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  site_name: String = 'Bidhu\'s E-Cart Shopping Site';

}
