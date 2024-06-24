import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const fileContacts = await fs.readFile(PATH_DB, 'utf-8');
    let existingContacts;
    try {
      existingContacts = JSON.parse(fileContacts);
    } catch (parseError) {
      existingContacts = [];
      console.error(parseError);
    }

    const newContacts = Array.from({ length: number }, createFakeContact);

    const allContacts = [...existingContacts, ...newContacts];

    const updateFileContacts = JSON.stringify(allContacts, null, 2);

    await fs.writeFile(PATH_DB, updateFileContacts, 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
