import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue:String ='';

  changeSearchValue(eventData: any){
    this.searchValue=(<HTMLInputElement>eventData.target).value;
    //console.log((<HTMLInputElement>eventData.target).value); 
  }
}
