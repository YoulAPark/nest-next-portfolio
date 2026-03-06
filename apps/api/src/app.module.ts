import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CareerModule } from './career/career.module'

@Module({
    imports: [
        CareerModule,
        ConfigModule.forRoot({
            isGlobal: true, // 전역에서 사용 가능
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
