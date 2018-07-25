import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../../shared/servises/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.sass']
})
export class BlogDetailsComponent implements OnInit {
  @Input() blogList;
  detail;
  params: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
  ) {
    this.activatedRoute.params.subscribe(params => this.params = params.id);
  }

  ngOnInit() {
    // this.detail = details;
    // debugger
    console.log(this.blogService.blogList);
    console.log(this.params);
    // console.log(details);
  }

}
