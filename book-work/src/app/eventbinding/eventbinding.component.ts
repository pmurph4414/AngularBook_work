import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent {
  counter = 0;
  mouse: string;
  upValues: string = '';
  downValues: string = '';
  keypressValue: string = '';
  x: string = '';
  y: string = '';
  view: string = '';

  mouseGoesIn = function() {
    this.mouse = "entered";
  };

  mouseLeft = function() {
    this.mouse = "left";
  };

  imageArray: string[] = [
    "../assets/images/flower.jpg",
    "../assets/images/lake.jpg",
    "../assets/images/bison.jpg",
  ]

  imageUrl: string = this.imageArray[this.counter];

  changeImg = function() {
    if(this.counter < this.imageArray.length - 1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
    this.imageUrl = this.imageArray[this.counter];
  }

  onKeyUp(event: any) {
    this.upValues = event.key;
    //this.upValues += event.target.value + ' | ';
  }

  onKeyDown(event: any) {
    this.downValues = event.key;
    //this.downValues += event.target.value + ' | ';
  }

  keyPress(event: any) {
    this.keypressValue = event.key;
    //this.keyPressValue += event.target.value + ' | ';
  }

  move(event: any) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  underTheScope(event: any) {
    if (event.type === "focus") {
      this.view = "the text box is focused";
    } else if (event.type === "blur") {
      this.view = "the input box is blurred";
    }
    console.log(event);
  }

}
