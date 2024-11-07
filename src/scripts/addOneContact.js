import { createFakeContact } from "../utils/createFakeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {let oldContacts = await readContacts();
    let newContact = [] ;
    let contactToAdd = createFakeContact();
    newContact.push(contactToAdd);
    try {
        writeContacts([...oldContacts, ...newContact]);
    } catch (error) {
        console.log(error);
    }};

addOneContact();
