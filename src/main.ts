import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'
import { ValidationPipe } from '@nestjs/common'
import { validationOptions } from './config'

async function bootstrap() {
    const appOptions = { cors: true }
    const app = await NestFactory.create(AppModule, appOptions)
    app.useGlobalPipes(new ValidationPipe(validationOptions))
    await app.listen(process.env.PORT || 3000)
}
bootstrap()
