import { Schema, Prop } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

export interface User {
    username: string;
    password: string;
    _id?: string;
  }
  
  @Schema()
  export class UserSchema {
    @Prop({ required: true, unique: true })
    username: string;
  
    @Prop({ required: true })
    password: string;
  
  }
  
  