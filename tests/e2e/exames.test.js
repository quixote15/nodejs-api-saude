import {describe, it} from 'mocha';
import request from 'supertest'
import app from '../../src/index.app.js'
import assert from 'assert'


describe('Api Exames E2e Test Suite', () => {
  describe('api/hello', () => {
    it('should request to hello world route', async() => {
      const response = await request(app)
        .get('/api/hello')
        .expect(200)
      
        assert.deepStrictEqual(response.text, 'Wa Project is working!')
    })
  })
})