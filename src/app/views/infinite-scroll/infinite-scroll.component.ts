import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.sass']
})
export class InfiniteScrollComponent  {
  modalText = 'lorem 4 ';
  array = [];
  sum = 100;
  title = 'This is Angular InfiniteScroll v';
  // title = `'This is Angular InfiniteScroll v' + systemConfig.map['ngx-infinite-scroll'].split('@')[1]`;

  modalIsOpen = '';
  modalTitle = 'scroll to update';
  modalBody = 'lorem 4 ';

  modalScrollDistance = 2;
  modalScrollThrottle = 50;

  constructor() {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
  }

  onScrollDown () {
    console.log('scrolled!!');

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    for (let i = start; i < this.sum; ++i) {
      this.array.push(i);
    }
  }

  onModalScrollDown () {
    this.modalTitle = 'updated on ' + (new Date()).toString();
    this.modalBody += this.modalText;
  }
  open () {
    this.modalIsOpen = 'in modal-open';
  }

  close () {
    this.modalIsOpen = '';
    this.modalBody = this.modalText;
  }
}



