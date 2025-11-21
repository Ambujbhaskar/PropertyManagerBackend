import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Property extends Document {
  @ApiProperty({
    description: 'Property name',
    example: 'Sunrise Villa',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    description: 'Property address',
    example: '123 Main Street, New York, NY 10001',
  })
  @Prop({ required: true })
  address: string;

  @ApiProperty({
    description: 'Person ID who owns the property (reference to Person collection)',
    example: '507f1f77bcf86cd799439011',
  })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Person', required: true })
  ownedBy: string; // Reference to Person collection

  @ApiProperty({
    description: 'Utility information as key-value pairs',
    example: {
      'Electricity Bill No': 'ELEC-12345',
      'Water Bill No': 'WATER-67890',
    },
  })
  @Prop({
    type: Map,
    of: String, // Stores key-value pairs (e.g., Electricity Bill No., Water Bill No.)
    default: {},
  })
  utilityInfo: Record<string, string>;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
