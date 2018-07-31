import {Component, OnInit} from '@angular/core';

import {TitleService} from './shared/servises/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';
  today;
  constructor( public titleService: TitleService){
    titleService.init();
  }

  ngOnInit() {
    // console.log(this.items);
    this.today = new Date();
  }
}
