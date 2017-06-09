import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../modules/counter';
import Counter from './components/Counter';
import { ReduxState } from '../modules';

const mapStateToProps = (state: ReduxState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  decrement: decrementCount,
  increment: incrementCount,
};

const CounterContainer: React.ComponentClass<{}> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export { CounterContainer as Counter };
