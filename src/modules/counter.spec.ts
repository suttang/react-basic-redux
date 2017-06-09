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
    const amount = 10;
    expect(reducer(initialState, incrementCount(amount))).toEqual({ count: initialState.count + amount });
  });

  it('should handle incrementCount', () => {
    const { initialState } = setUp();
    const amount = 10;
    expect(reducer(initialState, decrementCount(amount))).toEqual({ count: initialState.count - amount });
  });
});
