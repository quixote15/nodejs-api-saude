import {describe, it} from 'mocha';
import IRead from '../../src/interfaces/IRead.js';
import IWrite from '../../src/interfaces/IWrite.js';
import Assert from 'assert'
import NotImplementedException from '../../src/utils/NotImplementedException.js';
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