import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Counter from './counter';
import Count from './count';
import Button from './button';

describe('Counter', () => {
  it('should be display count', () => {
    const increment = () => {};
    const decrement = () => {};
    const component = shallow(<Counter count={135} increment={increment} decrement={decrement} />);
    expect(component.find(Count).props().count).toEqual(135);
  });

  it('should be attach action props', () => {
    const increment = sinon.spy();
    const decrement = sinon.spy();
    const component = shallow(<Counter count={135} increment={increment} decrement={decrement} />);
    component.find(Button).filterWhere(n => n.prop('label') === 'increment').simulate('click');
    component.find(Button).filterWhere(n => n.prop('label') === 'decrement').simulate('click');
    expect(increment.called).toBe(true);
    expect(decrement.called).toBe(true);
  });
});
