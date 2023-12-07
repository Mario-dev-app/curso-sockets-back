import Server from "./classes/server";
import express from 'express';
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";

const server = Server.instance;

//BodyParser
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());

//Rutas de servicios
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});