import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAvailabilityDto } from 'src/create-availability.dto';
import { SalonAvailabilityService } from './salon-availability.service';

@Controller('api/availability')
export class SalonAvailabilityController {
  constructor(
    private readonly salonAvailabilityService: SalonAvailabilityService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createAvailability(
    @Body(ValidationPipe) createAvailabilityDto: CreateAvailabilityDto,
  ) {
    if (createAvailabilityDto.hasOwnProperty('__nest__')) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Validation failed',
      };
    }
    try {
      const newAvailability =
        new this.salonAvailabilityService.availabilityModel(
          createAvailabilityDto,
        );
    } catch (error) {
      console.error('Error saving availability:', error); 
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to create availability',
      };
    }
  }
}
