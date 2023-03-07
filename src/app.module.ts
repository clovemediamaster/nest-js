import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcController } from './controllers/calculator.controller';
import { ApiCalcController } from './modules/calculator/calculator.api.service';
@Module({
  imports: [],
  controllers: [AppController, CalcController],
  providers: [AppService, ApiCalcController],
})
export class AppModule {}
