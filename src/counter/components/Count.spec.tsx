import * as React from 'react';
import * as assert from 'power-assert';
import { shallow } from 'enzyme';
import Count from './Count';

describe('Count', () => {
  it('should be display prop count', () => {
    const count: number = 12357;
    const component = shallow(<Count count={count} />);
    assert(component.text() === `Count: ${count}`);
  });
});
