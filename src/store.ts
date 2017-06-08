import { applyMiddleware, combineReducers, compose, createStore, Action } from 'redux';
import { reducer as counter, CounterState, CounterActions } from './counter/module';

export interface ReduxState {
  counter: CounterState;
}

export type ReduxAction = CounterActions | Action;

export default function configureStore() {
  const reducers = combineReducers({
    counter,
  });
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(

  )));

  return store;
}
