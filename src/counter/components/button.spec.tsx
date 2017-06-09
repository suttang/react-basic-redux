import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  it('contains label text', () => {
    const wrapper = shallow(<Button label="LABEL_TEXT" onClick={() => { alert('ALERT_TEXT'); }} />);
    expect(wrapper.text()).toBe('LABEL_TEXT');
  });

  it('should call function when click', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Button label="" onClick={spy} />);
    wrapper.simulate('click');
    expect(spy.called).toBe(true);
  });
});
