import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const fileContacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(fileContacts);
  } catch (error) {
    console.error(error);
    return [];
  }
};

console.log(await getAllContacts());
