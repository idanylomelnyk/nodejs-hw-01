import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const fileContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContacts);

    if (contacts.length > 0) {
      return await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
