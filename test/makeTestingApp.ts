import { NestFactory } from '@nestjs/core'
import { AppModule } from '../src/app.module'
import { ValidationPipe } from '../src/validationPipe'
import { TrimPipe } from '../src/trimPipe'
import { classTransformerInterceptor } from '../src/classTransformerInterceptor'
import { clacks } from '../src/clacks.middleware'
import waitOn from 'wait-on'
import { setupBuckets } from '../src/s3'

export const getRequestUrl = () => {
  return `localhost:${process.env.OPTIC_PROXY_PORT || process.env.PORT}`
}

export const makeTestingApp = async () => {
  await setupBuckets()
  const app = await NestFactory.create(AppModule, { logger: ['error'] })
  app.useGlobalPipes(new TrimPipe(), ValidationPipe)
  app.useGlobalInterceptors(new classTransformerInterceptor())
  app.use(clacks)

  let port = process.env.PORT
  await waitOn({
    resources: [`localhost:${port}`],
    reverse: true,
  })
  await app.listen(port)
  return app
}
