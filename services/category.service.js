const faker = require('faker');

class CategoryService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.vehicle.type(),
        product_id: faker.datatype.uuid()
      });
    }
  }

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
      product_id: faker.datatype.uuid()
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  index() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
      product_id: faker.datatype.uuid()
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }

}

module.exports = CategoryService;
