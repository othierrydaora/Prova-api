import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import petController from './controller/petController.js'

const server = express();

server.use(express.json());
server.use(cors());
server.use(petController);

server.listen(process.env.PORT, () => { console.log(`Porta aberta: ${process.env.PORT}`) });
