import React from 'react';
import ReactDOM from 'react-dom';
import DriversOrder from './DriversOrder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DriversOrder />, div);
});
