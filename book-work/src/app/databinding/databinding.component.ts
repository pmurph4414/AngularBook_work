import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  //templateUrl: './databinding.component.html',
  template: ` 
    <br>
    {{ str1 + ' ' + name}}
    <br>
    <img src="{{ imageSrc }}" />
    <br>
    <p>{{ str2 + getLikes(likes) }}</p>
  `,
  //styleUrls: ['./databinding.component.scss']
  styles: [`
    a {
      margin-bottom: 32px;
    }
    img {
      max-width: 450px;
      height: auto;
    }
    p {
      font-size: 35px;
      color: darkBlue;
    }
  `]
})
export class DatabindingComponent {
  str1: string = "Hello my name is"
  name: string = "Brendan"
  str2: string = "I like to"
  likes: string[] = ['hike', 'rappel', 'Jeep']
  getLikes = function(arr: any) {
    var arrString = arr.join(", ");
    return " " + arrString
  }
  imageSrc: string = "../assets/images/angelsLanding.jpg"
}
