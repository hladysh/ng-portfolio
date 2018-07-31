import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
  appLoader = false;

  constructor() {
  }

  ngOnInit() {
    this.appLoader = true;
  }

}
