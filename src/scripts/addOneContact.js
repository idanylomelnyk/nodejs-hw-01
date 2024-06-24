import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const fileContacts = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(fileContacts);

    const newContact = createFakeContact();

    const allContacts = [...existingContacts, newContact];

    const updateDB = JSON.stringify(allContacts, null, 2);

    await fs.writeFile(PATH_DB, updateDB, 'utf8');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
