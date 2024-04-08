import { Test, TestingModule } from '@nestjs/testing';
import { SalonAvailabilityController } from './salon-availability.controller';

describe('SalonAvailabilityController', () => {
  let controller: SalonAvailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalonAvailabilityController],
    }).compile();

    controller = module.get<SalonAvailabilityController>(SalonAvailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
