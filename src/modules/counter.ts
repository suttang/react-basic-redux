import { Action } from 'redux';

const INCREMENT_COUNT = 'counter/INCREMENT';
const DECREMENT_COUNT = 'counter/DECREMENT';

type INCREMENT_COUNT_TYPE = typeof INCREMENT_COUNT;
type DECREMENT_COUNT_TYPE = typeof DECREMENT_COUNT;

interface IncrementAction extends Action {
  type: INCREMENT_COUNT_TYPE;
  value: number;
}

interface DecrementAction extends Action {
  type: DECREMENT_COUNT_TYPE;
  value: number;
}

export const incrementCount = (value: number): IncrementAction => ({
  type: INCREMENT_COUNT,
  value,
});

export const decrementCount = (value: number): DecrementAction => ({
  type: DECREMENT_COUNT,
  value,
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
      return { count: state.count + action.value };
    case DECREMENT_COUNT:
      return { count: state.count - action.value };
    default:
      return state;
  }
}
