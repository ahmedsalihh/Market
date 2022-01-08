import * as counterActions from '../actions/counterActions';

const defaultState = {
  counter: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case counterActions.INCREASE_COUNTER_ACTION:
      return { ...state, counter: state.counter + 1 };
    case counterActions.DECREASE_COUNTER_ACTION:
      return { ...state, counter: state.counter - 1 };
    case counterActions.INCREASE_VALUE_ACTION:
      return { ...state, counter: state.counter + action.inputValue };
    default:
      return state;
  }
};
