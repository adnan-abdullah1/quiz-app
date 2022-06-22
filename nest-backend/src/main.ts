import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
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
