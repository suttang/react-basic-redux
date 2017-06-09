import * as React from 'react';
import * as assert from 'power-assert';
import { shallow } from 'enzyme';
import Count from './count';

describe('Count', () => {
  it('should be display prop count', () => {
    const amount: number = 12357;
    const component = shallow(<Count count={amount} />);
    assert(component.text() === `Count: ${amount}`);
  });
});
