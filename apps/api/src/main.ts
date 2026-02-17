import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)

    /**
     * Cross-Origin 요청 허용 설정
     * Next.js(3000) → Nest(3001)
     */
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    })

    /**
     * 0.0.0.0으로 바인딩하여 추후 Docker 작동시 접근 가능하도록 설정
     */
    const host = '0.0.0.0'
    const port = Number(process.env.PORT) || 3001

    await app.listen(port, host)
}

bootstrap().catch((err: unknown) => {
    console.error('❌ Failed to start Nest application', err)
    process.exit(1)
})
