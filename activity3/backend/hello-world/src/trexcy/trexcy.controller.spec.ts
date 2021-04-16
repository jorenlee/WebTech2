import { Test, TestingModule } from '@nestjs/testing';
import { TrexcyController } from './trexcy.controller';
import { TrexcyService } from './trexcy.service';

describe('TrexcyController', () => {
  let controller: TrexcyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrexcyController],
      providers: [TrexcyService],
    }).compile();

    controller = module.get<TrexcyController>(TrexcyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
