import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT)
}
bootstrap().then(() => {
  console.log({
    projectName: 'API Nest PGSQL',
    date: new Date(),
    host: `${process.env.HOST}:${process.env.PORT}`,
  })
})
