const faker = require('faker');

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        name: faker.internet.email(),
        image: faker.image.avatar(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newProduct);
    return newProduct;
  }

  index() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
