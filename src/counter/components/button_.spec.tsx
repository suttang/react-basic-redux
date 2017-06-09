import * as React from 'react';
import * as assert from 'power-assert';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  it('should contains label text', () => {
    const label: string = 'LABEL_TEXT';
    const component = shallow(<Button label={label} onClick={() => { alert('ALERT_TEXT'); }} />);
    assert(component.text() === label);
  });

  it('should call function when click', () => {
    const spy = sinon.spy();
    const component = shallow(<Button label="" onClick={spy} />);
    component.simulate('click');
    assert(spy.called);
  });
});
