class Application {
  constructor({routerAdapter, repository, corsAdapter, Router}) {
    this.routerAdapter = routerAdapter;
    this.app = routerAdapter();
    this.repository = repository;
    this.corsAdapter = corsAdapter;
    this.router = Router;
  }

  //================================================
  // Middlewares
  //================================================
  applyMidlewares() {
    // Express v4.16.0 and higher
    // --------------------------
    this.app.use(this.routerAdapter.json());
    this.app.use(this.routerAdapter.urlencoded({
      extended: true
    }));

    this.app.use(this.corsAdapter)
    this.app.options('*', this.corsAdapter)
  }

  

  init(port = 3000) {
    this.applyMidlewares();
    this.routes = this.router.build()
    this.app.listen(port);
    console.log(`Listening on port ${port}`)
  }
}

export default Application