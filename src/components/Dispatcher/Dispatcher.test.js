import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from './Dispatcher';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dispatcher />, div);
});
