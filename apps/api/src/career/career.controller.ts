import { Controller, Get, Query } from '@nestjs/common'
import { CareerService } from './career.service'

@Controller('careers')
export class CareerController {
    constructor(private readonly careerService: CareerService) {}

    /**
     * 언어에 맞춰 최신 경력순으로 경력 및 프로젝트 목록을 조회한다.
     * @param {'ko' | 'en'} lang - 클라이언트가 요청한 다국어 코드
     * @returns 다국어 처리 및 정제가 완료된 경력 목록 배열
     */
    @Get()
    async getCareers(@Query('lang') lang: 'ko' | 'en' = 'ko') {
        return this.careerService.findAll(lang)
    }
}
