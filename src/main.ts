import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import connection from './database/connection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  connection();
  await app.listen(process.env.PORT, () => {
    console.log('server running at http://localhost:3000');
  });
}
bootstrap();
