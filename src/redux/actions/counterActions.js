export const INCREASE_COUNTER_ACTION = 'INCREASE_COUNTER';
export const DECREASE_COUNTER_ACTION = 'DECREASE_COUNTER';
export const INCREASE_VALUE_ACTION = 'INCREASE_VALUE';

export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER_ACTION,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREASE_COUNTER_ACTION,
  };
};

export const increaseValue = inputValue => {
  return {
    type: INCREASE_VALUE_ACTION,
    inputValue,
  };
};
