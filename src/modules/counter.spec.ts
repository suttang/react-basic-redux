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
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle incrementCount', () => {
    const { initialState } = setUp();
    expect(reducer(initialState, incrementCount(10))).toEqual({ count: 10 });
  });

  it('should handle incrementCount', () => {
    const { initialState } = setUp();
    expect(reducer(initialState, decrementCount(10))).toEqual({ count: -10 });
  });
});
