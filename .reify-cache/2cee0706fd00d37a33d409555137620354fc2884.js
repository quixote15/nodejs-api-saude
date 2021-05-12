"use strict";/**
 * @swagger
 * tags:
 *   name: Exames
 *   description: Gerenciamentos de exames 
 *   name: Labs
 *   description: Gerenciamentos de laboratórios 
 *   name: Associar
 *   description: Gerenciar associaçao entre labs e exames 
 */
/**
 * @swagger
 *  components:
 *    requestBodies:
 *      exameBody:
 *        required: 
 *          - nome
 *          - tipo
 *        description: Objeto com dados para criar um novo exame
 *        schema:
 *          type: object
 *          properties:
 *            nome:
 *              type: string
 *            tipo:
 *              type: string
 *        example:
 *           nome: exame de sangue
 *           tipo: imagem
 *      labBody:
 *        required: 
 *          - nome
 *          - endereco
 *        description: Objeto com dados para criar um novo laboratorio
 *        schema:
 *          type: object
 *          properties:
 *            nome:
 *              type: string
 *            endereco:
 *              type: string
 *        example:
 *           nome: exame de sangue
 *           endereco: Av. rio branco, 300 - centro - RJ
 * 
 *    schemas:
 *      ApiError:
 *        type: object
 *        required:
 *          - code
 *          - errorId
 *          - errorMessage
 *        properties:
 *          code:
 *            type: number
 *          errorId:
 *            type: string
 *          errorMessage:
 *            type: string
 *        example:
 *          code: 500
 *          errorId: 'INTERNAL_SERVER_ERROR'
 *          errorMessage: 'Um error inesperado aconteceu'
 *      Exame:
 *        type: object
 *        required:
 *          - nome
 *          - tipo
 *          - status
 *          - _id
 *        properties:
 *          nome:
 *            type: string
 *          tipo:
 *            type: string
 *            description: exame clinico | imagem
 *          status:
 *            type: string
 *            enum: [ativo, inativo]
 *        example:
 *           nome: exame de sangue
 *           tipo: exame clinico
 *           status: ativo
 *           _id: 60985542a0c78c7f5f839844
 *      Laboratorio:
 *        type: object
 *        required:
 *          - nome
 *          - endereco
 *          - status
 *          - _id
 *        properties:
 *          nome:
 *            type: string
 *          endereco:
 *            type: string
 *            description: Endereço fisico do laboratório.
 *          status:
 *            type: string
 *            enum: [ativo, inativo]
 *        example:
 *           nome: exame de sangue
 *           endereco: Av. Jardim atlantico, 1400 - Centro - SP
 *           status: ativo
 *           _id: 60985542a0c78c7f5f839844
 * 
 * 
 */

class AppRouter {

  constructor({routerAdapter, examesController, labsController}){
    this.router = routerAdapter;
    this.examesController = examesController;
    this.labsController = labsController;
    
  }

  setApiRoutes() {
    /**
     * @swagger
     * /api/hello:
     *  get:
     *    description: Endpoint simples de teste de conexao da api
     *    responses:
     *      '200': Wa Project is working!
     */
    this.router.route('/api/hello')
      .get((req, res) => {
        res.send('Wa Project is working!')
      });
  
    this.router.route('/')
      .get((req, res) => {
        res.send('Wa Project is working!')
      });
    return this
  } 

  setExamesRoutes() {

    /**
     * @swagger
     * /api/exames:
     *  get:
     *    tags: [Exames]
     *    description: Endpoint responsável em consultar e retornar os exames
     *    responses:
     *      '200':
     *        content: 
     *          application/json:
     *            schema:
     *              type: array
     *              items: 
     *                $ref: '#/components/schemas/Exame'
     *      '500':
     *        content:
     *          application/json:
     *            schema:
     *               type: object
     *               $ref: '#/components/schemas/ApiError'
     * 
     *  post:
     *    description: Endpoint responsável criar um exame e deixá-lo ativo por padrão.
     *    tags: [Exames]
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/requestBodies/exameBody'
     *          
     *    responses:
     *     '200': 
     *      description: Exame criado.
     *     '400':
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'
     *     '500':
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'
     */
    this.router
      .route('/api/exames')
      .get(this.examesController.find)
      .post(this.examesController.create);

    /**
     * @swagger
     * /api/exames/{id}:
     *  delete:
     *    description: Endpoint responsável em remover logicamente um exame
     *    tags: [Exames]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: string
     *        description: Identificador Hash no padrão UUID v4
     *    responses:
     *      '200':
     *        description: Exame removido.
     *      '400':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     *      '500':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     *  put:
     *    description: Endpoint responsável em atualizar um exame
     *    tags: [Exames]
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/requestBodies/exameBody'
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: string
     *        description: Identificador Hash no padrão UUID v4
     *    responses:
     *      '200':
     *        description: Exame atualizado.
     *      '400':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     *      '500':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     */
    this.router
      .route('/api/exames/:id')
      .delete(this.examesController.remove)
      .put(this.examesController.update)

    this.router
      .route('/api/exames/associar')
      .post(this.examesController.associarLab)
 
    this.router
      .route('/api/exames/desassociar')
      .post(this.examesController.desassociarLab)
 
    return this;
  }

  setLabsRoutes() {
    /**
     * @swagger
     * /api/labs:
     *  get:
     *    tags: [Labs]
     *    description: Endpoint responsável em consultar e retornar os laboratórios
     *    responses:
     *      '200':
     *        content: 
     *          application/json:
     *            schema:
     *              type: array
     *              items: 
     *                $ref: '#/components/schemas/Laboratorio'
     *      '500':
     *        content:
     *          application/json:
     *            schema:
     *               type: object
     *               $ref: '#/components/schemas/ApiError'
     * 
     *  post:
     *    description: Endpoint responsável criar um laboratório e deixá-lo ativo por padrão.
     *    tags: [Labs]
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/requestBodies/labBody'
     *          
     *    responses:
     *     '200': 
     *      description: Laboratório criado.
     *     '400':
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'
     *     '500':
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'
     */
    this.router
    .route('/api/labs')
    .get(this.labsController.find)
    .post(this.labsController.create)



     /**
     * @swagger
     * /api/labs/{id}:
     *  delete:
     *    description: Endpoint responsável em remover logicamente um laboratório
     *    tags: [Labs]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: string
     *        description: Identificador Hash no padrão UUID v4
     *    responses:
     *      '200':
     *        description: Laboratorio removido.
     *      '400':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     *      '500':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     *  put:
     *    description: Endpoint responsável em atualizar um Laboratorio
     *    tags: [Labs]
     *    requestBody:
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/requestBodies/labBody'
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: string
     *        description: Identificador Hash no padrão UUID v4
     *    responses:
     *      '200':
     *        description: Laboratorio atualizado.
     *      '400':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     *      '500':
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              $ref: '#/components/schemas/ApiError'      
     */
    this.router
    .route('/api/labs/:id')
    .delete(this.labsController.remove)
    .put(this.labsController.update)
    return this;
  }

  build() {
    console.log('This returns all routes', this.router)
    this
    .setApiRoutes()
    .setExamesRoutes()
    .setLabsRoutes();
    return this.router
  }
}

module.exportDefault(AppRouter);