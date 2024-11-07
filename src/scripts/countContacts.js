import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
    let counts = 0 ;
    let contacts =  await readContacts();
    contacts.forEach(element => {
        counts += 1;
    });
    return counts;
} catch (error) {
        console.log(error);

    }

};
console.log(await countContacts());
