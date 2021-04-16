import { Test, TestingModule } from '@nestjs/testing';
import { TrexcyService } from './trexcy.service';

describe('TrexcyService', () => {
  let service: TrexcyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrexcyService],
    }).compile();

    service = module.get<TrexcyService>(TrexcyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
