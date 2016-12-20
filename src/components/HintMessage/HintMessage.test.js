import React from 'react';
import ReactDOM from 'react-dom';
import HintMessage from './HintMessage';

const hinter = {
  hint: {
    type: 'danger',
    message: 'test message'
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HintMessage hint={hinter}/>, div);
});

