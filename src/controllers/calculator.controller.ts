import { ApiCalcController } from 'src/modules/calculator/calculator.api.service';
import { calcData } from 'src/controllers/dto/calculator.dto';

import { Controller, Get, Param } from '@nestjs/common';

@Controller('calc')
export class CalcController {
  constructor(private apiService: ApiCalcController) {}

  @Get('addition/:param1/:param2')
  addition(
    @Param('param1') param1: string,
    @Param('param2') param2?: string,
  ): calcData {
    return this.apiService.addition(param1, param2);
  }

  @Get('subtract/:param1/:param2')
  subtract(
    @Param('param1') param1: number,
    @Param('param2') param2?: number,
  ): calcData {
    return this.apiService.subtract(param1, param2);
  }

  @Get('multiply/:param1/:param2')
  multiply(
    @Param('param1') param1: number,
    @Param('param2') param2?: number,
  ): calcData {
    return this.apiService.multiply(param1, param2);
  }

  @Get('divide/:param1/:param2?')
  divide(
    @Param('param1') param1: number,
    @Param('param2') param2?: number,
  ): calcData {
    return this.apiService.divide(param1, param2);
  }
}
