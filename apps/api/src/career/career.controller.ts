import { Controller, Get, Query } from '@nestjs/common';
import { CareerService } from './career.service';

@Controller('careers')
export class CareerController {
    constructor(private readonly careerService: CareerService) { }

    @Get()
    async getCareers(@Query('lang') lang: 'ko' | 'en' = 'ko') {
        return this.careerService.findAll(lang);
    }
}