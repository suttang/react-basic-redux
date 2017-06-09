import * as React from 'react';
import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Counter from './counter';
import Count from './count';
import Button from './button';

describe('Counter', () => {
  it('should be display count', () => {
    const count: number = 135;
    const increment = () => {};
    const decrement = () => {};
    const component = shallow(<Counter count={count} increment={increment} decrement={decrement} />);
    assert(component.find(Count).prop('count') === count);
  });

  it('should be attach action props', () => {
    const count: number = 135;
    const increment = sinon.spy();
    const decrement = sinon.spy();
    const component = shallow(<Counter count={count} increment={increment} decrement={decrement} />);
    component.find(Button).filterWhere(n => n.prop('label') === 'increment').simulate('click');
    component.find(Button).filterWhere(n => n.prop('label') === 'decrement').simulate('click');
    assert(increment.called);
    assert(decrement.called);
  });
});
