import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  portfolioList = [
    {
      img: 'bags.PNG',
      alt: 'bags',
      name: 'Шустрік',
      descr: 'Розробка сайту',
      href: 'http://bizik.shustrik.com.ua/',
    },
    {
      img: 'b-b.png',
      alt: 'bags',
      name: '',
      descr: '',
      href: '',
    },
    {
      img: 'lux-visa.png',
      alt: 'Lux-visa',
      name: 'Lux-visa',
      descr: 'Центр візової підтримки',
      href: 'http://luxvisa.com.ua/',
    },
  ];

  constructor() {
  }


  ngOnInit() {
  }

}
