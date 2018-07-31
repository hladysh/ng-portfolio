export class Portfolio {
  constructor(
    public portfolioImg: string,
    public portfolioAlt: string,
    public portfolioName: string,
    public portfolioDescr: string,
    public portfolioHref: string,

  ) {
  }
}

export interface Portfolios {
  portfolios: Portfolio[];
}
