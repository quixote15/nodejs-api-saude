"use strict";var swaggerUi;module.link('swagger-ui-express',{default(v){swaggerUi=v}},0);var swaggerJsDoc;module.link("swagger-jsdoc",{default(v){swaggerJsDoc=v}},1);var dotenv;module.link('dotenv',{default(v){dotenv=v}},2);var express,Router;module.link('express',{default(v){express=v},Router(v){Router=v}},3);var mongoose;module.link('mongoose',{default(v){mongoose=v}},4);var cors;module.link('cors',{default(v){cors=v}},5);var AppRouter;module.link('./index.routes.js',{default(v){AppRouter=v}},6);var Application;module.link('./config/application.js',{default(v){Application=v}},7);var databaseAdapter;module.link('./config/database.js',{default(v){databaseAdapter=v}},8);var ExamesController;module.link('./controllers/exames.controller.js',{default(v){ExamesController=v}},9);var LabsController;module.link('./controllers/labs.controller.js',{default(v){LabsController=v}},10);













dotenv.config()

const routerDeps = {
  routerAdapter: new Router(),
  examesController: ExamesController,
  labsController: LabsController
};
const router = new AppRouter(routerDeps);

const appDeps = {
  routerAdapter: express, 
  repository: {}, 
  corsAdapter: cors(), 
  Router: router,
  databaseAdapter,
}

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: "1.0.0",
      title: "Wa Project API",
      description: "Uma Api Nodejs para área da saude.",
      contact: {
        name: "Tiago C. Santos",
        url: "https://swagger.io",
        email: "santos2tiago@gmail.com"
      },
      servers: ["http://localhost:3000"]
    }
  },
  // ['.routes/*.js']
  apis: ["./src/index.routes.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = new Application(appDeps);
const PORT = process.env.PORT || 3000;

const serverInstance = app
.setDocs(swaggerUi, swaggerDocs)
.init(PORT)




module.exportDefault(serverInstance);