import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './UsersForm';
import faker from 'faker';
import fakerNL from 'faker/locale/nl';

const user = {
  name: faker.name.findName(),
  password: faker.internet.password(),
  phone: fakerNL.phone.phoneNumberFormat(1),
  status: faker.random.boolean(),
  auto: faker.company.catchPhraseAdjective(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm
  user={user}
  />, div);
});
