import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        let data = await readContacts();
        return data;
    } catch (error) {
        console.log(error);

    }
};

console.log(await getAllContacts());
