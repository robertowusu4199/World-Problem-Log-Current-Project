import { ConfigService } from '@nestjs/config'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  const Configservice = app.get(ConfigService)
  //const port = Configservice.get('PORT')
  app.use(cookieParser());
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  //await app.listen(port);
}
bootstrap();







//app.use({ limit: '5mb' })
//await app.listen(process.env.PORT || 3000);
