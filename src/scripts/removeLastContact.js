import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const fileContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileContacts);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } else {
      console.log('List is empty');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
