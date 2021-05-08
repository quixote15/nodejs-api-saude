

class AppRouter {
  constructor({routerAdapter, examesController}){
    this.router = routerAdapter;
    this.examesController = examesController
    
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
      .post(this.examesController.create);
    return this;
  }

  setLabsRoutes() {
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