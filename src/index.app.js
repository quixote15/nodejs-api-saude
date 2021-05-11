import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from "swagger-jsdoc";
import dotenv from 'dotenv'
import express, {Router} from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import AppRouter from './index.routes.js'
import Application from './config/application.js'
import databaseAdapter from './config/database.js';

import ExamesController from './controllers/exames.controller.js'
import LabsController from './controllers/labs.controller.js'

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




export default serverInstance