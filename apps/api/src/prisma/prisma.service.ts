import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const host = process.env.DB_HOST
        const port = Number(process.env.DB_PORT)
        const user = process.env.DB_USER
        const password = process.env.DB_PASSWORD
        const database = process.env.DB_NAME

        if (!host || !user || !database) {
            throw new Error('❌ 환경설정 파일 내의 DB_HOST, DB_USER, DB_NAME 변수를 확인해주시기 바랍니다.')
        }

        const adapter = new PrismaMariaDb({
            host,
            port,
            user,
            password,
            database,
        })

        super({ adapter })
    }

    async onModuleInit(): Promise<void> {
        await this.$connect()
    }

    async onModuleDestroy(): Promise<void> {
        await this.$disconnect()
    }
}