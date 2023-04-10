const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(),
    name: "Anderson",
    email: "andersonvieira@gmail.com",
    phone: "1234567687",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // retornando uma promise (forma de trabalhar com async no js)
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
