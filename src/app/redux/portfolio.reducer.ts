import {PORTFOLIO_ACTION, PortfolioAction} from './portfolio.action';

const initialState = {
  portfolio: []
};

export function portfolioReducer(state = initialState, action: PortfolioAction) {
  switch (action.type) {

    case PORTFOLIO_ACTION.LOAD_PORTFOLIO:
      return {
        ...state,
        portfolio: [...action.payload]
      };
    default:
      return state;
  }
}
