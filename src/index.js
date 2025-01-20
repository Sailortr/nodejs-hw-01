import { faker } from '@faker-js/faker';

const id = faker.string.uuid();
const fullName = faker.person.fullName();
const phone = faker.phone.number();
const email = faker.internet.email();
const job = faker.person.jobTitle();

console.log(id, fullName, phone, email, job);

const fakeUser = {
  id: faker.string.uuid(),
  fullName: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
};

console.log(fakeUser);
