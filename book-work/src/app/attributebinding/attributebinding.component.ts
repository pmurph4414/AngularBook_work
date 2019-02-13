import { Component } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styleUrls: ['./attributebinding.component.scss']
})
export class AttributebindingComponent {
  myPic: string = "../assets/images/sunset.jpg";
  isEnabled: boolean = false;
  className: string = "myClass";

}
