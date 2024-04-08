import { Module } from '@nestjs/common';
import { BookingService } from 'src/services/booking.services';
import { BookingController } from 'src/controllers/booking.controller';
import { Booking } from 'src/models/booking.models';


@Module({
    controllers: [BookingController], 
    providers: [BookingService], 
  })
  export class BookingModule {}
  