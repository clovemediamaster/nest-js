import { HttpException, HttpStatus } from '@nestjs/common';
import { calcData } from 'src/controllers/dto/calculator.dto';

export class ApiCalcController {
  private checkResult(result: number): calcData {
    if (result > 1000000000 || result < -1000000000) {
      throw new HttpException(
        'The result cannot be more than 1 000 000 000 or less than -1 000 000 000',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { status: 'OK', data: result };
  }

  public addition(param1: string, param2: string) {
    const result = parseInt(param1) + parseInt(param2);
    return this.checkResult(result);
  }

  public subtract(param1: number, param2: number) {
    const result = param1 - param2;
    return this.checkResult(result);
  }

  public multiply(param1: number, param2: number) {
    const result = param1 * param2;
    return this.checkResult(result);
  }

  public divide(param1: number, param2: number) {
    if (param2 === undefined || param2 == 0) {
      throw new HttpException(
        'The second param must be provided and cannot be "0"',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const result = param1 / param2;
      return this.checkResult(result);
    }
  }
}
