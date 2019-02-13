import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Various small projects from Angular book';
  subTitle = 'Topics spanning interpolation and other issues';

  router: string;

  constructor(private _router: Router){
    this.router = _router.url; 
  }
}
