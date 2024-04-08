import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Availability } from 'src/availability.model';
import { AvailabilityModel } from 'src/availability.schema';
import { Model } from 'mongoose';

@Injectable()
export class SalonAvailabilityService {
  constructor(
    @InjectModel(typeof AvailabilityModel)
    public readonly availabilityModel: Model<Availability>,
  ) {}

  async createAvailability(availability: Availability): Promise<Availability> {
    const newAvailability = new this.availabilityModel(availability);
    return await newAvailability.save();
  }

  async findAvailabilityByDay(day: string): Promise<Availability | null> {
    return await this.availabilityModel.findOne({ day });
  }
}
// You can add other methods for managing availability here
