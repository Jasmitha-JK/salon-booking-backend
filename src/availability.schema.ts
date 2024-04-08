import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Availability } from './availability.model'; 

@Schema()
export class AvailabilitySchema {
  @Prop({ required: true })
  day: string;

  @Prop({ required: true })
  slots: Availability['slots']; 
}

export const AvailabilityModel = SchemaFactory.createForClass(AvailabilitySchema);

