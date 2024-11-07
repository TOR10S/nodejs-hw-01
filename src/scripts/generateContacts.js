import { createFakeContact } from "../utils/createFakeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        let oldContacts = await readContacts();
        let newContacts = [] ;
        for (let i = 0; i < number; i++) {
            let contactToAdd = createFakeContact();
            newContacts.push(contactToAdd);
        }
        writeContacts([...oldContacts, ...newContacts]);
    } catch (error) {
        console.log(error);
    }
};

generateContacts(1);
