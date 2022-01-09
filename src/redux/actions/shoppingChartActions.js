export const ADD_TO_CHART = 'ADD_TO_CHART';
export const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';

export const addToChart = product => {
  return {
    type: ADD_TO_CHART,
    product,
  };
};

export const increaseAmount = slug => {
  return {
    type: INCREASE_AMOUNT,
    slug,
  };
};

export const decreaseAmount = slug => {
  return {
    type: DECREASE_AMOUNT,
    slug,
  };
};
