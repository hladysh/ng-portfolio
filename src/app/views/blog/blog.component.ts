import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  blogList: any;
  appLoader = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.appLoader = true;
    this.blogList = this.blogService.blogList;
    // console.log(this.blogList);
  }

}
