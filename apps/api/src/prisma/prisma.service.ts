import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const connection = process.env.DATABASE_URL

        if (connection == undefined) {
            throw new Error('❌ 환경변수 DATABASE_URL이 설정되지 않았습니다.')
        }

        // const  = new PrismaMariaDb(connection)

        const separator = connection.includes('?') ? '&' : '?'
        const connectionString = `${connection}${separator}allowPublicKeyRetrieval=true&useSSL=false`

        // 객체 대신 완성된 문자열을 넘기면 타입 에러가 사라집니다.
        const adapter = new PrismaMariaDb(connectionString)
        super({ adapter })
    }

    /**
     * 애플리케이션 실행시 DB 연결을 수행한다.
     */
    async onModuleInit(): Promise<void> {
        await this.$connect()
        console.log('🚀 Prisma v7: MySQL Driver Adapter가 정상 연결 되었습니다.')
    }

    /**
     * 애플리케이션 종료시 DB 연결을 해제한다.
     */
    async onModuleDestroy(): Promise<void> {
        await this.$disconnect()
    }
}
