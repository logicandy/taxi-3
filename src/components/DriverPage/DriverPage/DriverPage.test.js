import React from 'react';
import ReactDOM from 'react-dom';
import DriverPage from './DriverPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DriverPage />, div);
});
