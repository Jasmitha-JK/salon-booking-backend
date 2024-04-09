import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model'; 
import { Module } from '@nestjs/common';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])],
  exports: [MongooseModule], 
})
export class UserModule {}
