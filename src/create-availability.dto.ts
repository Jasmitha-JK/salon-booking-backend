import { IsString, IsArray, ValidateNested, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class Slot {
  @IsString()
  
  start: string;

  @IsString()
  end: string;

  @IsNumber()
  @Min(1)
  @Max(10) // Adjust max capacity as needed
  maxCapacity: number;
}

export class CreateAvailabilityDto {
  @IsString()
  day: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Slot)
  slots: Slot[];
}
