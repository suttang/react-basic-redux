import { Action } from 'redux';

const INCREMENT_COUNT = 'counter/INCREMENT';
const DECREMENT_COUNT = 'counter/DECREMENT';

type INCREMENT_COUNT_TYPE = typeof INCREMENT_COUNT;
type DECREMENT_COUNT_TYPE = typeof DECREMENT_COUNT;

interface IncrementAction extends Action {
  type: INCREMENT_COUNT_TYPE;
  count: number;
}

interface DecrementAction extends Action {
  type: DECREMENT_COUNT_TYPE;
  count: number;
}

export const incrementCount = (value: number): IncrementAction => ({
  type: INCREMENT_COUNT,
  count: value,
});

export const decrementCount = (value: number): DecrementAction => ({
  type: DECREMENT_COUNT,
  count: value,
});

export interface CounterState {
  count: number;
}

export type CounterActions = IncrementAction | DecrementAction;

const initialState: CounterState = {
  count: 0,
};

export function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + action.count };
    case DECREMENT_COUNT:
      return { count: state.count - action.count };
    default:
      return state;
  }
}
