"use strict";var describe,it;module.link('mocha',{describe(v){describe=v},it(v){it=v}},0);var IRead;module.link('../../src/interfaces/IRead.js',{default(v){IRead=v}},1);var IWrite;module.link('../../src/interfaces/IWrite.js',{default(v){IWrite=v}},2);var Assert;module.link('assert',{default(v){Assert=v}},3);var NotImplementedException;module.link('../../src/utils/NotImplementedException.js',{default(v){NotImplementedException=v}},4);




const { rejects, deepStrictEqual } = Assert;

describe('Javascript Simulated Interfaces Test Suite', () => {
  
  describe('IRead', () => {
    it('should throw error when trying to use find method', async () => {
      const readOperation = new IRead();
      const expectedExpection = new NotImplementedException('find')
      await rejects(readOperation.find({}), expectedExpection)
    })
  })
  describe('IWrite', () => {
    it('should throw error when trying to use create method', async () => {
      const readOperation = new IWrite();
      const expectedExpection = new NotImplementedException('create')
      await rejects(readOperation.create({}), expectedExpection)
    })
    it('should throw error when trying to use update method', async () => {
      const readOperation = new IWrite();
      const expectedExpection = new NotImplementedException('update')
      await rejects(readOperation.update({}), expectedExpection)
    })
    it('should throw error when trying to use remove method', async () => {
      const readOperation = new IWrite();
      const expectedExpection = new NotImplementedException('remove')
      await rejects(readOperation.remove({}), expectedExpection)
    })
  })
})