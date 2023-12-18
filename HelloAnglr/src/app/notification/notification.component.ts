import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayON}" >
                <p>{{showNotifi()}}</p>
                <div class="close">
                  <button class="btn btn-danger" (click)="onButtonClick()">X</button>
                </div>
            </div>`,
  styles: ["div{margin:6px 0px; padding:5px 10px;text-align:center;}",
            "p{font-family: 'Times New Roman', Times, serif;font-weight: bold;font-size:24px;}",
            ".close{ float:inline-end; margin-left: -15px;}",
            ".fadeOut{visibility: hidden; opacity: 0; transition: visibility 0s 2s , opacity 2s linear;}"]
})
//template: `<div class="alert alert-success" [hidden]="displayON" >
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayON:boolean = false;

  showNotifi(){
    return 'This is just a demo site to show the functionality';
  }

  onButtonClick(){
    this.displayON=true;
  }
}
