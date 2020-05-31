import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const adapter = new FastifyAdapter();

  // Sample content-type parser. In production see https://github.com/fastify/fastify/blob/2.x/lib/contentTypeParser.js
  adapter.getInstance().addContentTypeParser('application/hal+json', (req, body, done) => {
    done(null, JSON.stringify(body));
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter
  );
  await app.listen(3000);
}
bootstrap();
