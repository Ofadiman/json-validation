import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const PORT = 4000

void (async () => {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Nest.js request/response validation approach.')
    .setVersion('1.0')
    .build()

  SwaggerModule.setup('swagger', app, SwaggerModule.createDocument(app, config))

  await app.listen(PORT)
})()
  .then(() => {
    console.log(`Application is listening on port ${PORT} 🚀`)
  })
  .catch(() => {
    console.error(`An error has occurred while starting the application 💥`)
  })
