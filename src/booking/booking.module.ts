import { Module } from '@nestjs/common';
import { BookingService } from 'src/services/booking.services';
import { BookingController } from 'src/controllers/booking.controller';
import { Booking } from 'src/models/booking.models';
import { BookingSchema } from 'src/models/booking.models';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
    // Import other modules if needed
  ],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
