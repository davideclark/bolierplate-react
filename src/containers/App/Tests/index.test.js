import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from '../index';

describe('<App />', () => {  
  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
});