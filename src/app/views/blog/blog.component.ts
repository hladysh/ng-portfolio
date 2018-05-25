import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  blogList = [
    {
      id: '1',
      day: '11.03.2017',
      img: 'blog_content_1.jpg',
      alt: 'blog img 1',
      name: 'TITLE POST ',
      descr: `Help people interested in this repository understand your project by adding a README.`,
      tegs: ['#blog', '#news'],
    },
    {
      id: '2',
      day: '1.04.2017',
      img: 'blog_content_1.jpg',
      alt: 'blog img 2',
      name: 'TITLE POST ',
      descr: `Help people interested  README.`,
      tegs: ['#blog', '#news'],
    },
    {
      id: '3',
      day: '19.06.2018',
      img: 'blog_content_1.jpg',
      alt: 'blog img 3',
      name: 'TITLE POST ',
      descr: `Help people interested in this repository a README.`,
      tegs: [],
    },
    {
      id: '4',
      day: '11.04.2018',
      img: 'blog_content_1.jpg',
      alt: 'blog img 4',
      name: 'TITLE POST ',
      descr: `Help people interested in this repository a README.`,
      tegs: ['#blog', '#news'],
    },
  ];
  constructor() { }

  ngOnInit() {
    // console.log(this.blogList);
  }

}
