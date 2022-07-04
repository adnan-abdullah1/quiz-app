import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as bodyParser from 'body-parser';
const express=require('express')
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.json({limit: "50mb"})) //For JSON requests
  app.use(express.urlencoded({
    limit: "50mb",
    extended: false
  }));
  // app.enableCors(
  //   {
  //     origin: "*",
  //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //     preflightContinue: true,
  //     optionsSuccessStatus: 204,
  //     credentials: true
  //   }
  // );
  // app.enableCors()
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
