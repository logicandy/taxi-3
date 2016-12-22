import faker from 'faker';
import fakerNL from 'faker/locale/nl';

export const client = {
  phone: fakerNL.phone.phoneNumberFormat(1),
  email: faker.internet.email(),
};


