import dotenv from 'dotenv'
import express, {Router} from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import AppRouter from './index.routes.js'
import Application from './config/application.js'
import databaseAdapter from './config/database.js';

import ExamesController from './controllers/exames.controller.js'

dotenv.config()
//import swaggerUi from 'swagger-ui-express';
const routerDeps = {
  routerAdapter: new Router(),
  examesController: ExamesController
};
const router = new AppRouter(routerDeps);

const appDeps = {
  routerAdapter: express, 
  repository: {}, 
  corsAdapter: cors(), 
  Router: router,
  databaseAdapter,
}

const app = new Application(appDeps);
const PORT = process.env.PORT || 3000;

app.init(PORT)




