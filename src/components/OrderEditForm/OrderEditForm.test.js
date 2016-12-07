import React from 'react';
import ReactDOM from 'react-dom';
import OrderEditForm from './OrderEditForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderEditForm />, div);
});
