import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from 'config/database.config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { SalonAvailabilityService } from './salon-availability/salon-availability.service';
import { SalonAvailabilityController } from './salon-availability/salon-availability.controller';
import { BookingModule } from './booking/booking.module'; // Import BookingModule

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig.uri),
    BookingModule
  ],
  controllers: [AppController, AuthController, SalonAvailabilityController],
  providers: [AppService, AuthService, UserService, SalonAvailabilityService],
})
export class AppModule {}
