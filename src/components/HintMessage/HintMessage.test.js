import React from 'react';
import ReactDOM from 'react-dom';
import HintMessage from './HintMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HintMessage />, div);
});
