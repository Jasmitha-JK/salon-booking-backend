import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { SalonAvailabilityService } from './salon-availability/salon-availability.service';
import { SalonAvailabilityController } from './salon-availability/salon-availability.controller';
import { BookingModule } from './booking/booking.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './userModule';

const secret = 'taylor_swift';
const connectionString =
  'mongodb+srv://Jasmitha:jasmitha@cluster0.sa1kj2l.mongodb.net/';

@Module({
  imports: [
    UserModule, // Import UserModule first, ensuring correct model configuration
    MongooseModule.forRoot(connectionString),
    BookingModule,
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController, AuthController, SalonAvailabilityController, UserService],
  providers: [AppService, AuthService, UserService, SalonAvailabilityService],
})
export class AppModule {}
