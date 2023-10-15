import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config()
import { notBot } from './test-app/notApp-service';
import { OnBot } from './bot/bot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //бот должен слушаться постоянно, без API. Но есть возможность настроить отдельные функции бота через APIs
  // new notBot().checkFirstFunc()
  new OnBot().FourButton()
}
bootstrap();
