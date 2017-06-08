// import Counter from './components/Counter';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import { decrementCount, incrementCount } from './module';
// import { ReduxAction, ReduxState } from '../store';

// export class ActionDispatcher {
//   constructor(private dispatch: (action: ReduxAction) => void) {}

//   public increment(value: number): void {
//     this.dispatch(incrementCount(value));
//   }

//   public decrement(value: number): void {
//     this.dispatch(decrementCount(value));
//   }
// }

// export default connect(
//   (state: ReduxState) => ({ value: state.counter }),
//   (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) })
// )(Counter);

import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './module';
import Counter from './components/Counter';
import { ReduxState } from '../store';

const mapStateToProps = (state: ReduxState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  decrement: decrementCount,
  increment: incrementCount,
  // decrement: () => decrementCount(1),
  // increment: () => incrementCount(1),
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
