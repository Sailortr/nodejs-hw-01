import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('Contacts written successfully.');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
  }
};

export default writeContacts;
