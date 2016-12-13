import React from 'react';
import ReactDOM from 'react-dom';
import ErrorVisualizator from './ErrorVisualizator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorVisualizator />, div);
});
