import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        console.log(data);
        return JSON.parse(data) || [];
    } catch (error) {
        console.log(error);

    }
};

readContacts();