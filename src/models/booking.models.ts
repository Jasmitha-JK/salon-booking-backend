import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Availability } from 'src/availability.model'; // Assuming your Availability model exists

@Schema()
export class Booking extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Availability' })
  timeSlot: Availability; // Reference to Availability document

  @Prop({ required: true })
  user: string; // User ID or reference

  // Add other booking properties as needed (e.g., service type, notes)
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
