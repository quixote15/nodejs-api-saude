

class AppRouter {

  constructor({routerAdapter, examesController, labsController}){
    this.router = routerAdapter;
    this.examesController = examesController;
    this.labsController = labsController;
    
  }

  setApiRoutes() {
    this.router.route('/api/hello')
      .get((req, res) => {
        res.send('Wa Project is working!')
      });
    return this
  } 

  setExamesRoutes() {
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