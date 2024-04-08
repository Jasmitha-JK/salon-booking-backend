import { Test, TestingModule } from '@nestjs/testing';
import { SalonAvailabilityService } from './salon-availability.service';

describe('SalonAvailabilityService', () => {
  let service: SalonAvailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalonAvailabilityService],
    }).compile();

    service = module.get<SalonAvailabilityService>(SalonAvailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
