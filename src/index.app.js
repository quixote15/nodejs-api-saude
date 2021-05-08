import dotenv from 'dotenv'
import express, {Router} from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import AppRouter from './index.routes.js'
import Application from './config/application.js'


dotenv.config()
//import swaggerUi from 'swagger-ui-express';
const routerDeps = {routerAdapter: new Router()};
const router = new AppRouter(routerDeps);

const appDeps = {
  routerAdapter: express, 
  repository: {}, 
  corsAdapter: cors(), 
  Router: router
}

const app = new Application(appDeps);
const PORT = process.env.PORT || 3000;

app.init(PORT)




