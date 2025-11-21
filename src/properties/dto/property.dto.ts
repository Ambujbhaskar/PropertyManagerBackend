import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty({
    description: 'Property name',
    example: 'Sunrise Villa',
  })
  name: string;

  @ApiProperty({
    description: 'Property address',
    example: '123 Main Street, New York, NY 10001',
  })
  address: string;

  @ApiProperty({
    description: 'Person ID who owns the property (reference to Person collection)',
    example: '507f1f77bcf86cd799439011',
  })
  ownedBy: string;

  @ApiProperty({
    description: 'Utility information as key-value pairs (e.g., Electricity Bill No., Water Bill No.)',
    example: {
      'Electricity Bill No': 'ELEC-12345',
      'Water Bill No': 'WATER-67890',
    },
    required: false,
  })
  utilityInfo?: Record<string, string>;
}

export class PropertyResponseDto {
  @ApiProperty({
    description: 'Property ID',
    example: '507f1f77bcf86cd799439011',
  })
  _id: string;

  @ApiProperty({
    description: 'Property name',
    example: 'Sunrise Villa',
  })
  name: string;

  @ApiProperty({
    description: 'Property address',
    example: '123 Main Street, New York, NY 10001',
  })
  address: string;

  @ApiProperty({
    description: 'Person ID who owns the property',
    example: '507f1f77bcf86cd799439011',
  })
  ownedBy: string;

  @ApiProperty({
    description: 'Utility information',
    example: {
      'Electricity Bill No': 'ELEC-12345',
      'Water Bill No': 'WATER-67890',
    },
  })
  utilityInfo: Record<string, string>;
}
