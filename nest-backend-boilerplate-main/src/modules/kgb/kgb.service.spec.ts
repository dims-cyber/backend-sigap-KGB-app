import { Test, TestingModule } from '@nestjs/testing';
import { KgbService } from './kgb.service';

describe('KgbService', () => {
  let service: KgbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KgbService],
    }).compile();

    service = module.get<KgbService>(KgbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
