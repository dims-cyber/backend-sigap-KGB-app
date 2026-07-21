import { Test, TestingModule } from '@nestjs/testing';
import { KenaikanPangkatService } from './kenaikan-pangkat.service';

describe('KenaikanPangkatService', () => {
  let service: KenaikanPangkatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KenaikanPangkatService],
    }).compile();

    service = module.get<KenaikanPangkatService>(KenaikanPangkatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
