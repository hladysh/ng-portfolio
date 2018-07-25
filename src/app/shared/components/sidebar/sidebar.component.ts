import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../servises/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  blogServiseAll;

  constructor(private blogServise: BlogService) {
  }

  ngOnInit() {
    // console.log(this.blogServise);
    this.blogServiseAll = this.blogServise;
  }

}
