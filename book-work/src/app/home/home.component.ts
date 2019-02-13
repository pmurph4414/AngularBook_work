import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Various small projects from Angular book';
  subTitle = 'Topics spanning interpolation and other issues'

  constructor() { }

  ngOnInit() {
  }

}
