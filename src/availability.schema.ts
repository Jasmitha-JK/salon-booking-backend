import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Slot {
  start: string;
  end: string;
  maxCapacity: number;
}

export interface Availability {
  day: string;
  slots: Slot[];
}

export type AvailabilityDocument = Availability & Document;

@Schema()
export class AvailabilitySchema implements Availability {
  @Prop({ required: true })
  day: string;

  @Prop([
    {
      start: { type: String, required: true },
      end: { type: String, required: true },
      maxCapacity: { type: Number, required: true },
    },
  ])
  slots: Slot[];
}

export const AvailabilityModel =
  SchemaFactory.createForClass(AvailabilitySchema);
