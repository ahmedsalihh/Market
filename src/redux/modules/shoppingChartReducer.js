import * as shoppingChartActions from '../actions/shoppingChartActions';

const defaultState = {
  chartItems: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case shoppingChartActions.ADD_TO_CHART:
      let tmpChartItems;
      if (state.chartItems.some(s => s.slug === action.product.slug)) {
        tmpChartItems = state.chartItems.map(item => {
          if (item.slug === action.product.slug) {
            return { ...item, count: item.count + 1 };
          } else {
            return { ...item };
          }
        });
      } else {
        tmpChartItems = [...state.chartItems, { ...action.product, count: 1 }];
      }
      return { ...state, chartItems: [...tmpChartItems] };
    case shoppingChartActions.INCREASE_AMOUNT:
      return {
        ...state,
        chartItems: [
          ...state.chartItems.map(item => {
            if (item.slug === action.slug) {
              return { ...item, count: item.count + 1 };
            } else {
              return { ...item };
            }
          }),
        ],
      };
    case shoppingChartActions.DECREASE_AMOUNT:
      if (state.chartItems.find(f => f.slug === action.slug).count === 1) {
        return {
          ...state,
          chartItems: [...state.chartItems.filter(f => f.slug !== action.slug)],
        };
      }
      return {
        ...state,
        chartItems: [
          ...state.chartItems.map(item => {
            if (item.slug === action.slug) {
              return { ...item, count: item.count - 1 };
            } else {
              return { ...item };
            }
          }),
        ],
      };
    default:
      return state;
  }
};
