# 🚀 Project Initialization & Environment Setup Guide (v2026 Standard)

본 문서(README)는 **Node.js v20 LTS** 및 **pnpm v10** 모노레포 환경에서 **Prisma v7 (Driver Adapter)** 인프라를 일관되게 구축하기 위한 엔지니어링 표준 절차를 기술합니다.

개발 환경의 파편화를 방지하고 멱등성(Idempotency)을 보장하기 위해, 모든 기여자(Contributor)는 로컬 환경 구성 시 아래 절차를 엄격히 준수해야 합니다.

---

## 📋 1. System Requirements

시스템 전역에 아래 명시된 기술 스택의 최소 버전이 설치되어 있어야 합니다. (버전 불일치 시 의존성 해결 단계에서 에러가 발생할 수 있습니다.)

- **Node.js**: `^20.18.0` (LTS Iron 권장)
- **pnpm**: `^10.29.0` (v10 Strict Mode 지원 필수)
- **Docker Engine**: `^29.2.0` / **Compose**: `^5.0.2`

---

## 🏗 2. Setup & Initialization Strategies

개발 환경의 현재 상태에 따라 아래 두 가지 시나리오 중 하나를 선택하여 실행하십시오.

### Scenario A: Deep Clean & Reset (환경 재구축)

의존성 그래프(Dependency Graph)가 오염되었거나, OS 아키텍처 이동(예: Windows ↔ macOS Apple Silicon)으로 인해 바이너리 재빌드가 필요한 경우 수행합니다.

```bash
# 1. 아티팩트 및 락파일 완전 제거 (Deep Clean)
# pnpm v10의 recursive 패턴을 사용하여 워크스페이스 전역의 오염된 node_modules를 격리 해제 및 삭제합니다.
pnpm --recursive exec rm -rf node_modules
rm -rf node_modules
rm -f pnpm-lock.yaml

# 2. 의존성 재설치 및 락파일 재생성
# 캐시를 무시하고 그래프를 완전히 새롭게 갱신합니다.
pnpm install

# 3. pnpm 저장소 최적화 (Phantom Dependencies 정리)
pnpm store prune
```

### Scenario B: Fresh Clone (신규 환경 구축)

저장소를 처음 클론(Clone) 받은 경우, 기존 팀원들과 동일한 버전을 보장받기 위해 `pnpm-lock.yaml`의 무결성을 유지하며 설치를 진행합니다.

```bash
# 1. 의존성 설치 (Lockfile 준수)
pnpm install --frozen-lockfile

# 2. 환경 변수 주입 (템플릿 기반 복사)
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

> ⚠️ **주의**: `.env` 파일 복사 후, 본인의 로컬 환경에 맞게 `DB_HOST`, `PORT` 등의 변수를 반드시 검증하십시오.

---

## ⚙️ 3. Core Infrastructure Execution

### 3.1. Modern Docker Provisioning

> **🍎 macOS (Apple Silicon) 사용자 필수 확인**
> M1/M2/M3 등 ARM 아키텍처 맥북을 사용 중이라면 docker-compose.yml의 DB 서비스에 반드시 platform: linux/amd64를 추가해야 합니다.

```bash
YAML
services:
  db:
    image: mariadb:10.11 # 또는 mysql:8.0 등
    platform: linux/amd64 # 👈 ARM 아키텍처 호환성 보장
    ports:
      - "3306:3306"
```

애플리케이션 레이어가 가동되기 전, 영속성 계층(Persistence Layer)이 먼저 가용 상태여야 합니다. Docker Compose v5 표준 사양을 따릅니다.

```bash
# 인프라 가동 (Background 모드)
# 구형 하이픈 명령어(docker-compose) 대신 공백 형태의 최신 CLI를 사용합니다.
docker compose up -d

# 건강 상태 모니터링 (Health Check)
# DB 엔진 초기화(Initialization)를 위해 최소 15초의 Warm-up 타임을 확보하십시오.
docker compose ps --format "table {{.Name}}\t{{.Status}}"
```

### 3.2. Prisma v7 Engine Generation

Prisma v7은 **Driver Adapter** 패턴을 사용하므로, 런타임 환경의 OS 아키텍처에 맞는 Query Engine 바이너리 바인딩이 필수적입니다.

```bash
# API 워크스페이스 진입
cd apps/api

# Prisma Client 생성
# pnpm v10 생태계에서는 npx 대신 dlx를 사용하여 바이너리 실행의 일관성을 유지합니다.
pnpm dlx prisma generate
```

### 3.3. Application Runtime Development

인프라와 ORM 클라이언트가 모두 준비되었다면, API 서버를 구동합니다.

```bash
# API 개발 서버 가동
pnpm run start:dev
```

> **Verification Check**: 터미널 구동 로그에 `[Prisma] ✅ Driver Adapter Connected` 메시지가 정상적으로 출력되는지 반드시 확인하십시오.

---

## ⚠️ 4. Troubleshooting Notes

- **pnpm v10 Strictness**: v10은 정의되지 않은 `peerDependencies`에 대해 매우 엄격하게 동작합니다. 모노레포 내부 패키지 간 연결에서 경고가 발생할 경우, 최상위 `package.json`의 `pnpm.patchedDependencies` 설정을 검토하십시오.
- **Docker Compose v5 Specs**: v5부터는 `docker-compose.yml` 최상단의 `version` 필드가 더 이상 필요하지 않습니다(Deprecated). 하위 호환성 경고가 뜬다면 해당 필드를 제거하십시오.
- **Architecture Discrepancy**: macOS (M1/M2/M3) 환경에서 MySQL 컨테이너가 Exit Code 1로 종료될 경우, `docker-compose.yml` 내 DB 서비스 블록에 `platform: linux/amd64` 설정을 명시적으로 추가하십시오.
- **Prisma v7 Configuration**: v7 표준에 따라 마이그레이션 경로는 `schema.prisma`가 아닌 `prisma.config.ts`에서 객체 형태로 관리되어야 합니다. (예: `migrations: { path: "./prisma/migrations" }`)

---

**Lead Maintainer**: YoulaPark(urdepone@gmail.com)
**Last Refined**: 2026.03.07
