import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.sass']
})
export class BlogDetailsComponent implements OnInit {
  @Input() blogList;
  detail;

  constructor() {
  }

  ngOnInit() {
    // this.detail = details;
    console.log(this.blogList);
    // console.log(details);
  }

}
