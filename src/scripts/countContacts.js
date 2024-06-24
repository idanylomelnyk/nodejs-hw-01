import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const fileContacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(fileContacts);
    return parsedContacts.length;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

console.log(await countContacts());
