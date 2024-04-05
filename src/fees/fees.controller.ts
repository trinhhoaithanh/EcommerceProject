import { Controller, Get } from '@nestjs/common';
import { FeesService } from './fees.service';

@Controller('api/fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Get('')
  getAllFee(){
    return this.feesService.getAllFee();
  }
}
