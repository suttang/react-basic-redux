import * as assert from 'power-assert';
import { reducer, incrementCount, decrementCount, CounterState } from './counter';

function setUp() {
  const initialState: CounterState = {
    count: 0,
  };

  return {
    initialState,
  };
}

describe('counter reducer', () => {
  it('should return the initial state', () => {
    const { initialState } = setUp();
    const state: CounterState = reducer(undefined, {});
    assert.deepEqual(state, initialState);
  });

  it('should handle incrementCount', () => {
    const { initialState } = setUp();
    const count = 10;
    const state: CounterState = reducer(initialState, incrementCount(count));
    assert.deepEqual(state, { count: initialState.count + count });
  });

  it('should handle decrementCount', () => {
    const { initialState } = setUp();
    const count = 10;
    const state: CounterState = reducer(initialState, decrementCount(count));
    assert.deepEqual(state, { count: initialState.count - count });
  });
});
