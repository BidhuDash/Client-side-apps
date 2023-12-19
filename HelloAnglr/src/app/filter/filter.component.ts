import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  All: any;

  constructor() { }

  ngOnInit(): void {
  }

  @Input('all') allProducts: number = 10;
  @Input() available: number = 0;
  @Input('not') notAvailable: number = 0;

  selectedRadioButtonCount: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonCount);
    //console.log(this.selectedRadioButtonCount);
  }
}
