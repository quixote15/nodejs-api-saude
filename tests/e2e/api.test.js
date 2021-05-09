import {describe, it} from 'mocha';
import request from 'supertest'
import app from '../../src/index.app.js'
import assert from 'assert'

const examesUrl = '/api/exames'
const labsUrl = '/api/labs'

describe('Api E2e Test Suite', () => {
  describe('api/hello', () => {
    it('should request to hello world route', async() => {
      const response = await request(app)
        .get('/api/hello')
        .expect(200)
      
        assert.deepStrictEqual(response.text, 'Wa Project is working!')
    })
  });
  describe(examesUrl, () => {
  
    
      it('should list active exames', async() => {
        const response = await request(app)
        .get(examesUrl)
        .expect(200);
    
        assert.ok(response.status);
      })
    
      it('should create a new exame', async () => {
        const response = await request(app)
        .post(examesUrl)
        .send({
          nome: "Exame De Teste suite",
          tipo: "imagem"
        })
        .expect(200)
    
        assert.ok(response.status);
        assert.deepStrictEqual(response.text, 'Exame criado.')
      });
    
      it('should update an exame', async () => {
        const examId = '6096f2edc041a25f1f5325cc'
        const response = await request(app)
        .put(`${examesUrl}/${examId}`)
        .send({
          nome: "Exame De Teste suite",
        });
    
        assert.ok(response.status)
        assert.deepStrictEqual(response.text, 'Exame atualizado.')
      })
      it('should logically remove exame', async()=> {
          const examId = '6096f2edc041a25f1f5325cc'
          const response = await request(app)
          .delete(`${examesUrl}/${examId}`)
          .send({
            nome: "Exame De Teste suite",
          });
    
          assert.ok(response.status)
          assert.deepStrictEqual(response.text, 'Exame removido.')
      })
  });


describe(labsUrl,  () => {
  it('it should create a new lab', async() => {
    const response = await request(app)
    .post(labsUrl)
    .send({})
    .expect(200);

    assert.ok(response.status);
    assert.deepStrictEqual(response.text,'Laboratorio criado.')
  })
})
})