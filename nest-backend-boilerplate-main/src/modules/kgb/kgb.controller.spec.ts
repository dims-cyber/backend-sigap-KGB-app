import { Test, TestingModule } from '@nestjs/testing';
import { KgbController } from './kgb.controller';

describe('KgbController', () => {
  let controller: KgbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KgbController],
    }).compile();

    controller = module.get<KgbController>(KgbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
