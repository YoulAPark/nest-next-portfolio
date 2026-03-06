import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CareerService {
    constructor(private prisma: PrismaService) { }

    async findAll(lang: 'ko' | 'en' = 'ko') {
        const careers = await this.prisma.career.findMany({
            orderBy: { startDate: 'desc' }, // 최신순
            include: {
                contentKo: lang === 'ko',
                contentEn: lang === 'en',
                projects: {
                    include: {
                        contentKo: lang === 'ko',
                        contentEn: lang === 'en',
                        tags: true,
                    },
                },
            },
        });

        return careers.map((career) => {
            const start = new Date(career.startDate);
            const end = career.endDate ? new Date(career.endDate) : new Date();

            // 총 개월 수 계산
            const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            // 다국어 대응 기간 텍스트
            const durationText = lang === 'ko'
                ? `${years > 0 ? `${years}년 ` : ''}${months > 0 ? `${months}개월` : years === 0 ? '1개월 미만' : ''}`.trim()
                : `${years > 0 ? `${years}y ` : ''}${months > 0 ? `${months}m` : years === 0 ? 'under 1m' : ''}`.trim();

            // 필요한 데이터만 골라서 깔끔하게 정제 (Flattening)
            return {
                id: career.id,
                startDate: career.startDate,
                endDate: career.endDate,
                duration: durationText, // 가공된 텍스트!
                order: career.order,
                companyName: lang === 'ko' ? career.contentKo?.companyName : career.contentEn?.companyName,
                role: lang === 'ko' ? career.contentKo?.role : career.contentEn?.role,
                description: lang === 'ko' ? career.contentKo?.description : career.contentEn?.description,
                projects: career.projects.map((p) => ({
                    id: p.id,
                    period: p.period,
                    title: lang === 'ko' ? p.contentKo?.title : p.contentEn?.title,
                    achievements: lang === 'ko' ? p.contentKo?.achievements : p.contentEn?.achievements,
                    tags: p.tags.map((t) => t.name),
                })),
            };
        });
    }
}