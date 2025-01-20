import { faker } from '@faker-js/faker';

const createFakeContact = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number('+90 ###-###-####'),
  };
};

export default createFakeContact;
