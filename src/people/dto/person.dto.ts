import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty({
    description: 'Person full name',
    example: 'Jane Smith',
  })
  name: string;

  @ApiProperty({
    description: 'Person address',
    example: '456 Oak Avenue, Los Angeles, CA 90001',
  })
  address: string;

  @ApiProperty({
    description: 'PAN card image URL or file reference',
    example: 'https://example.com/images/pancard.jpg',
    required: false,
  })
  panCardImage?: string;

  @ApiProperty({
    description: 'PAN card number',
    example: 'ABCDE1234F',
    required: false,
  })
  panNumber?: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}

export class PersonResponseDto {
  @ApiProperty({
    description: 'Person ID',
    example: '507f1f77bcf86cd799439011',
  })
  _id: string;

  @ApiProperty({
    description: 'Person full name',
    example: 'Jane Smith',
  })
  name: string;

  @ApiProperty({
    description: 'Person address',
    example: '456 Oak Avenue, Los Angeles, CA 90001',
  })
  address: string;

  @ApiProperty({
    description: 'PAN card image URL or file reference',
    example: 'https://example.com/images/pancard.jpg',
    required: false,
  })
  panCardImage?: string;

  @ApiProperty({
    description: 'PAN card number',
    example: 'ABCDE1234F',
    required: false,
  })
  panNumber?: string;
}
