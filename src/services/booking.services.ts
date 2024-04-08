import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from 'src/models/booking.models';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking.name) public readonly bookingModel: Model<Booking>) {}

  async getBookings(filters?: any): Promise<Booking[]> {
    try {
      return await this.bookingModel.find(filters);
    } catch (error) {
      console.error('Error retrieving bookings:', error);
      throw new Error('Failed to retrieve bookings'); // Throw a generic error for the controller
    }
  }
  
}
