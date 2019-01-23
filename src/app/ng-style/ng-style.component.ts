import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  title = 'ngStyle and ngClass Directives';
  // set a property that holds a random color for our style.
  randomColor = this.getRandomColor();
  // declare the fontsize and background color properties
  public fontSize = "12rem";
  public backgroundColor = "grey";

  constructor() { }
  // function to get random colors
  public getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // function to set a new random color
  setColor() {
    this.randomColor = this.getRandomColor();
  }

  ngOnInit() {
  }

}
