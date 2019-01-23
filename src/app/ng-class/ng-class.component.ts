import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  // variable to hold class name:
  public myClass = 'style1';

  // variable to hold boolean value to style1
  isClass1Visible: false;

  // variable to hold boolean value to style2
  isClass2Visible: false;

  constructor() { }

  // function to change the class from style1 to style 2 when clicked
  toggleClass() {
    this.myClass == 'style1' ? this.myClass = 'style2' : this.myClass = 'style1';
  }

  ngOnInit() {
  }

}
