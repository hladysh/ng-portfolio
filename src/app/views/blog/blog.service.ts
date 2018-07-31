import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogList = [
    {
      id: '1',
      day: '31.07.2018',
      img: 'blog_content_1.jpg',
      alt: 'blog img 1',
      name: 'TITLE POST ',
      descr: `Help people interested in this repository understand your project by adding a README.`,
      tegs: ['#blog', '#news'],
    },
    {
      id: '2',
      day: '31.07.2018',
      img: 'blog_content_1.jpg',
      alt: 'blog img 2',
      name: 'TITLE POST ',
      descr: `Help people interested  README.`,
      tegs: ['#blog', '#news'],
    },
    {
      id: '3',
      day: '31.07.2018',
      img: 'blog_content_1.jpg',
      alt: 'blog img 3',
      name: 'TITLE POST ',
      descr: `Help people interested in this repository a README.`,
      tegs: [],
    },
    {
      id: '4',
      day: '31.07.2018',
      img: 'blog_content_1.jpg',
      alt: 'blog img 4',
      name: 'TITLE POST ',
      descr: `Help people interested in this repository a README.`,
      tegs: ['#blog', '#news'],
    },
  ];
  constructor() { }
}
