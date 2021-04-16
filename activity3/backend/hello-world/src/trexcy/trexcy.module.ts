import { Module } from '@nestjs/common';
import { TrexcyService } from './trexcy.service';
import { TrexcyController } from './trexcy.controller';

@Module({
  controllers: [TrexcyController],
  providers: [TrexcyService]
})
export class TrexcyModule {}
