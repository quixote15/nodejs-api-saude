
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
    this.router
    .route('/api/labs')
    .get(this.labsController.find)
    .post(this.labsController.create)
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

export default AppRouter