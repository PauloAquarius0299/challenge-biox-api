import { NestFactory } from '@nestjs/core';
import { RecipesModule } from './recipe.module';


async function bootstrap() {
  const app = await NestFactory.create(RecipesModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
