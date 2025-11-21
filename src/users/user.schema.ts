import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class User extends Document {
  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    description: 'User email address (must be unique)',
    example: 'john.doe@example.com',
  })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({
    description: 'User password (hashed)',
    example: 'hashedPassword',
  })
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
