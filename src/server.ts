import "reflect-metadata"

import express, { json } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';
import '@shared/container';
import { handleError } from "@errors/handleError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use(handleError);

app.listen(3333, () => console.log('Listening on Port 3333') )