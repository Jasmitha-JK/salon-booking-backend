import { Controller, Get, Query, HttpStatus } from '@nestjs/common';
import { BookingService } from 'src/services/booking.services';
import { Booking } from 'src/models/booking.models';

@Controller('api/bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  async getBookings(
    @Query() filters: { date?: string; user?: string },
  ): Promise<Booking[] | { statusCode: number; message: string }> {
    try {
    let bookingQuery: { date?: string; user?: string }; // Initialize empty query object

    if (filters.date) {
      bookingQuery.date = filters.date; // Filter by date
    }

    if (filters.user) {
      bookingQuery.user = filters.user; // Filter by user ID
    }

   
      
    const bookings = await this.bookingService.bookingModel.find(bookingQuery).select({ _id: 0, __v: 0 });
    return bookings;
  } catch (error) {
      console.error('Error fetching bookings:', error);
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve bookings',
      }; // Return appropriate error response
    }
  }
}
