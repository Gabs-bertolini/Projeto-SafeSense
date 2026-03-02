import { Test, TestingModule } from '@nestjs/testing';
import { RiskEventService } from './risk-event.service';

describe('RiskEventService', () => {
  let service: RiskEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskEventService],
    }).compile();

    service = module.get<RiskEventService>(RiskEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
