class Application {
  constructor({routerAdapter, repository, corsAdapter, Router, databaseAdapter}) {
    this.routerAdapter = routerAdapter;
    this.app = routerAdapter();
    this.repository = repository;
    this.corsAdapter = corsAdapter;
    this.router = Router;
    this.databaseAdapter = databaseAdapter;
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

    const routes = this.router.build()
    this.app.use(routes);
  }

  async connectDb() {
    this.databaseAdapter.connect();
    return this;
  }
  

  init(port = 3000) {
    this.applyMidlewares();
    this.connectDb();
    
    this.app.listen(port);
    console.log(`Listening on port ${port}`)
  }
}

export default Application