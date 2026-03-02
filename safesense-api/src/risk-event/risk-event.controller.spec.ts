import { Test, TestingModule } from '@nestjs/testing';
import { RiskEventController } from './risk-event.controller';

describe('RiskEventController', () => {
  let controller: RiskEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiskEventController],
    }).compile();

    controller = module.get<RiskEventController>(RiskEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
