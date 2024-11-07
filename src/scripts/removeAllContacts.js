import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
            writeContacts([]);
    } catch (error) {
            console.log(error);

    }
};

removeAllContacts();
