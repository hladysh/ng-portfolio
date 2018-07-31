import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../views/blog/blog.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  blogServiseAll;

  constructor(private blogServise: BlogService,
              public authService: AuthService) {
  }

  ngOnInit() {
    // console.log(this.blogServise);
    // console.log('this.authService.authState Sidear  ' + this.authService.authState);
    this.blogServiseAll = this.blogServise;
  }

}
