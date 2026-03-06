import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CareerService {
    constructor(private prisma: PrismaService) {}

    /**
     * 다국어 처리가 완료된 프론트엔드 맞춤형 경력 목록을 반환한다.
     *
     * @param {'ko' | 'en'} [lang='ko'] - 선택한 언어
     * @returns 다국어 처리 및 근무 기간 계산이 완료된 정제된 경력 목록
     */
    async findAll(language: 'ko' | 'en' = 'ko') {
        /**
         * 언어에 맞춰 각 회사에서 수행한 프로젝트와 기술을 최신 경력순으로 출력한다.
         */
        const careers = await this.prisma.career.findMany({
            orderBy: { startDate: 'desc' },
            include: {
                contentKo: language === 'ko',
                contentEn: language === 'en',
                projects: {
                    include: {
                        contentKo: language === 'ko',
                        contentEn: language === 'en',
                        tags: true,
                    },
                },
            },
        })

        return careers.map((career) => {
            const duration = this.getDuration(career.startDate, career.endDate, language)

            const content = language === 'ko' ? career.contentKo : career.contentEn

            return {
                id: career.id,
                startDate: career.startDate,
                endDate: career.endDate,
                duration,
                order: career.order,
                companyName: content?.companyName ?? '',
                role: content?.role ?? '',
                description: content?.description ?? '',

                projects: career.projects.map((p) => {
                    const projectContent = language === 'ko' ? p.contentKo : p.contentEn

                    return {
                        id: p.id,
                        period: p.period,
                        title: projectContent?.title ?? '',
                        achievements: projectContent?.achievements ?? '',
                        tags: p.tags.map((t) => t.name),
                    }
                }),
            }
        })
    }

    /**
     * 시작일과 종료일을 계산하여 다국어 기간 텍스트를 생성한다.
     * 종료일이 없을 경우 현재 날짜를 기준으로 계산한다.
     *
     * @param {Date} startDate - 근무 시작일
     * @param {Date | null} endDate - 근무 종료일 (null일 경우 현재 시각으로 계산)
     * @param {'ko' | 'en'} lang - 적용할 다국어 코드
     * @returns {string} 가공된 기간 텍스트
     */
    private getDuration(startDate: Date, endDate: Date | null, lang: 'ko' | 'en'): string {
        const start = new Date(startDate)
        const end = endDate ? new Date(endDate) : new Date()

        const totalMonths =
            (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
        const years = Math.floor(totalMonths / 12)
        const months = totalMonths % 12

        if (lang === 'ko') {
            return `${years > 0 ? `${years}년 ` : ''}${months > 0 ? `${months}개월` : years === 0 ? '1개월 미만' : ''}`.trim()
        } else {
            return `${years > 0 ? `${years}y ` : ''}${months > 0 ? `${months}m` : years === 0 ? 'under 1m' : ''}`.trim()
        }
    }
}
