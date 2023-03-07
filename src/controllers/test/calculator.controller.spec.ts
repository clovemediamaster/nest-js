import { CalcController } from '../calculator.controller';
import { Test } from '@nestjs/testing';

describe('CalcController', () => {
  let calcController: CalcController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CalcController],
    }).compile();

    calcController = moduleRef.get<CalcController>(CalcController);
  });

  describe('addition', () => {
    it('return the sum of numbers', () => {
      expect(calcController.addition('6', '2')).toBe({
        status: 'OK',
        data: 8,
      });
    });
  });

  describe('subtract', () => {
    it('return the difference of numbers', () => {
      expect(calcController.subtract(6, 2)).toBe({
        status: 'OK',
        data: 4,
      });
    });
  });

  describe('multiply', () => {
    it('return multiplication of numbers', () => {
      expect(calcController.multiply(6, 2)).toBe({
        status: 'OK',
        data: 12,
      });
    });
  });
  describe('divide', () => {
    it('return division of numbers', () => {
      expect(calcController.divide(6, 2)).toBe({
        status: 'OK',
        data: 3,
      });
    });
  });
});
