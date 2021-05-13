"use strict";var describe,it;module.link('mocha',{describe(v){describe=v},it(v){it=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var app;module.link('../../src/index.app.js',{default(v){app=v}},2);var assert;module.link('assert',{default(v){assert=v}},3);var ApiError;module.link('../../src/utils/ApiError.js',{default(v){ApiError=v}},4);





const examesUrl = '/api/exames'
const associacaoUrl = '/api/exames/associar'
const buscaPorNomeUrl = '/api/exames/autocomplete';
const deassociacaoUrl = '/api/exames/desassociar'
const labsUrl = '/api/labs'

describe('Api E2e Test Suite', () => {
  describe('api/hello', () => {
    it('should request to hello world route', async() => {
      const response = await request(app)
        .get('/api/hello')
        .expect(200)
      
        assert.deepStrictEqual(response.text, 'Wa Project is working!')
    })
    it('should request to root api route', async() => {
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

       it('should not create an invalid exame', async() => {
        const response = await request(app)
        .post(examesUrl)
        .send({
          nome: "",
          tipo: "imagem"
        })
        .expect(422);

        const expected = ApiError.getValidationError("nome deve conter pelo menos 4 caracteres.")
        assert.deepStrictEqual(response.status, expected.code);
        assert.deepStrictEqual(response.body.code, expected.code)
        assert.deepStrictEqual(response.body.errorId, expected.errorId)
        assert.deepStrictEqual(response.body.errorMessage, expected.errorMessage)
      
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
    it('should create a new lab', async() => {
      const response = await request(app)
      .post(labsUrl)
      .send({
        nome: 'Lab jardim hebrom II',
        endereco: 'Av. Souza lima, 1200 - Jardim hebrom - SP'
      })
      .expect(200);
    
      assert.ok(response.status);
      assert.deepStrictEqual(response.text,'Laboratorio criado.')
    });
    
    it('should not create an invalid lab', async() => {
        const response = await request(app)
        .post(labsUrl)
        .send({
          nome: 'La',
          endereco: 'Av. Souza lima, 1200 - Jardim hebrom - SP'
        })
        .expect(422);

        const expected = ApiError.getValidationError("nome deve conter pelo menos 4 caracteres.")
        assert.deepStrictEqual(response.status, expected.code);
        assert.deepStrictEqual(response.body.code, expected.code)
        assert.deepStrictEqual(response.body.errorId, expected.errorId)
        assert.deepStrictEqual(response.body.errorMessage, expected.errorMessage)
      
    });


    it('should list all active labs', async () => {
      const response = await request(app)
      .get(labsUrl)
      .expect(200);
      
      assert.ok(response.status);
    });

    it('should update a lab', async () => {
      const labId = '609867a45f6dc686c6250c57'
      const response = await request(app)
      .put(`${labsUrl}/${labId}`)
      .send({nome: 'Lab Jardim 3'})
      .expect(200);

      assert.ok(response.status);
      assert.deepStrictEqual(response.text, 'Laboratorio atualizado.')
    })
    it('should remove a lab', async () => {
      const labId = '609867a45f6dc686c6250c57'
      const response = await request(app)
      .delete(`${labsUrl}/${labId}`)
      .expect(200);

      assert.ok(response.status);
      assert.deepStrictEqual(response.text, 'Laboratorio removido.')
    })
  })

  describe(associacaoUrl, () => {
    it('should associate an active lab with an exame', async () => {
      const response = await request(app)
      .post(associacaoUrl)
      .send({
        exame_id: "609c6e5ed874e06f4e210d2b",
        lab_id: "609869307fc1c2879f668ab5"
      })
      .expect(200);

      assert.ok(response.status);
      assert.deepStrictEqual(response.text, 'Exame associado.')
    });

    it('should deassociate an active lab with an exame', async () => {
    const response = await request(app)
    .post(deassociacaoUrl)
    .send({
      exame_id: "60985542a0c78c7f5f839844",
      lab_id: "609867b4070f6286d136c891"
    })
    .expect(200);

    assert.ok(response.status);
    assert.deepStrictEqual(response.text, 'Exame desassociado.')
  })
  })
  describe(buscaPorNomeUrl, () => {
    it('should list exams & labs matching exame name', async () => {
      const response = await request(app)
      .get(`${buscaPorNomeUrl}?nome=exame`)
      .expect(200);

      assert.ok(response.status);
    });

    it('should deassociate an active lab with an exame', async () => {
    const response = await request(app)
    .post(deassociacaoUrl)
    .send({
      exame_id: "60985542a0c78c7f5f839844",
      lab_id: "609867b4070f6286d136c891"
    })
    .expect(200);

    assert.ok(response.status);
    assert.deepStrictEqual(response.text, 'Exame desassociado.')
  })
  })

  
})