import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Person extends Document {
  @ApiProperty({
    description: 'Person full name',
    example: 'Jane Smith',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    description: 'Person address',
    example: '456 Oak Avenue, Los Angeles, CA 90001',
  })
  @Prop({ required: true })
  address: string;

  @ApiProperty({
    description: 'PAN card image URL or file reference',
    example: 'https://example.com/images/pancard.jpg',
    required: false,
  })
  @Prop()
  panCardImage?: string; // Optional: Stores URL or file reference

  @ApiProperty({
    description: 'PAN card number',
    example: 'ABCDE1234F',
    required: false,
  })
  @Prop()
  panNumber?: string; // Optional: Stores PAN number
}

export const PersonSchema = SchemaFactory.createForClass(Person);
