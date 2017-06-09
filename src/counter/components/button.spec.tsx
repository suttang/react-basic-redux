import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  it('should contains label text', () => {
    const component = shallow(<Button label="LABEL_TEXT" onClick={() => { alert('ALERT_TEXT'); }} />);
    expect(component.text()).toBe('LABEL_TEXT');
  });

  it('should call function when click', () => {
    const spy = sinon.spy();
    const component = shallow(<Button label="" onClick={spy} />);
    component.simulate('click');
    expect(spy.called).toBe(true);
  });
});
