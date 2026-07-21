import { Test, TestingModule } from '@nestjs/testing';
import { KenaikanPangkatController } from './kenaikan-pangkat.controller';

describe('KenaikanPangkatController', () => {
  let controller: KenaikanPangkatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KenaikanPangkatController],
    }).compile();

    controller = module.get<KenaikanPangkatController>(KenaikanPangkatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
