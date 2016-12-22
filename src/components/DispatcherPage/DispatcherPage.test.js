import React from 'react';
import ReactDOM from 'react-dom';
import DispatcherPage from './DispatcherPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DispatcherPage />, div);
});
