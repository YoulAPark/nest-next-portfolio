/**
 * Prisma v7 설정 구성 파일입니다.
 * 
 * 데이터베이스 연결 스키마 경로, 마이그레이션 저장 위치 및 환경 변수(.env) 기반의 데이터베이스 접속 URL을 정의합니다.
 * 
 * @param {schema} Prisma 모델 정의 파일 경로
 * @params {migrations} 데이터베이스 변경 이력 관리 경로
 * @params {datasource} 환경 변수를 통한 실시간 DB 연결 설정
 * @returns {PrismaConfig} Prisma 엔진이 참조할 최종 설정 객체
 */
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});

