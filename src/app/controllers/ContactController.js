const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // obterr um registro
  }

  store() {
    // criar um novo registro
  }

  update() {
    // editar um registro
  }

  delelte() {
    // deletar um registro
  }
}

// singleton => todo mundo que usar esse modulo vai usar a mesma intância
module.exports = new ContactController();
