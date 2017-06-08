import { Action } from 'redux';
import { reducer as counter, CounterState, CounterActions } from './counter';

export interface ReduxState {
  counter: CounterState;
}

export type ReduxAction = CounterActions | Action;

export const rootReducer = {
  counter,
};
