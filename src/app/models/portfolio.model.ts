export class Portfolio {
  constructor(

    public img: string,
    public alt: string,
    public name: string,
    public descr: string,
    public href: string,
    public id?: number,
  ) {
  }
}

export interface Portfolios {
  portfolios: Portfolio[];
}
