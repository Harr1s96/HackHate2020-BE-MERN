require('dotenv').config();
const DDPOModel = require('../src/models/DDPOModel');

exports.mochaHooks = {
  async beforeAll() {
    const testDDPO = new DDPOModel({
      name: 'testDDPO',
    });
    await testDDPO.save();
  },
  async afterAll() {
    await DDPOModel.deleteMany();
  },
};
