import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { rootReducer } from './modules';

export default function configureStore() {
  const reducers = combineReducers({
    ...rootReducer,
  });
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(

  )));

  if (module.hot) {
    module.hot.accept('./modules', () => {
      const newRootReducer = require('./modules').rootReducer;
      console.log(newRootReducer);
      store.replaceReducer(combineReducers({
        ...newRootReducer,
      }));
    });
  }

  return store;
}
