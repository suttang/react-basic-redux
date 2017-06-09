import * as React from 'react';
import { shallow } from 'enzyme';
import Count from './count';

describe('Count', () => {
  it('should be display prop count', () => {
    const component = shallow(<Count count={12357} />);
    expect(component.text()).toBe('Count: 12357');
  });
});
