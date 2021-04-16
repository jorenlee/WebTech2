import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrexcyModule } from './trexcy/trexcy.module';

@Module({
  imports: [TrexcyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
