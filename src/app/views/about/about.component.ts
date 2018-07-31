import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  appLoader = false;
  skills = [
    {
      name: 'HTML',
      width: 50,
    },
    {
      name: 'CSS',
      width: 60,
    },
    {
      name: 'SASS',
      width: 60,
    },
    {
      name: 'SCSS',
      width: 60,
    },
    {
      name: 'JAVASCRIPT',
      width: 60,
    },
    {
      name: 'JQUERY',
      width: 60,
    },
    {
      name: 'BOOTSTRAP',
      width: 60,
    },
    {
      name: 'PHOTOSHOP',
      width: 60,
    }, {
      name: 'avocode',
      width: 60,
    },
    {
      name: 'zeplin',
      width: 60,
    },
    {
      name: 'GULP',
      width: 60,
    },
    {
      name: 'Angular 2+',
      width: 60,
    },
    {
      name: 'webpack',
      width: 60,
    },

  ];

  constructor() {
  }

  ngOnInit() {
    this.appLoader = true;
  }

}
