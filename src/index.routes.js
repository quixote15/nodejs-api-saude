
class AppRouter {
  constructor({routerAdapter}){
    this.router = routerAdapter;
  }

  setApiRoutes() {
    this.router.route('/api/hello')
      .get((req, res) => {
        res.send('Wa Project is working!')
      });
    return this
  } 

  setExamesRoutes() {
    return this;
  }

  setLabsRoutes() {
    return this;
  }

  build() {
    console.log('This returns all routes')
    this
    .setApiRoutes()
    .setExamesRoutes()
    .setLabsRoutes();
    return this.router
  }
}

export default AppRouter