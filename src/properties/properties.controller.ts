import { Controller, Get, Post, Body } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from './property.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import {
  CreatePropertyDto,
  PropertyResponseDto,
} from './dto/property.dto';

@ApiTags('properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all properties' })
  @ApiResponse({
    status: 200,
    description: 'Returns all properties',
    type: [PropertyResponseDto],
  })
  getAll() {
    return this.propertiesService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new property' })
  @ApiBody({ type: CreatePropertyDto })
  @ApiResponse({
    status: 201,
    description: 'Property successfully created',
    type: PropertyResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid property data',
  })
  create(@Body() property: CreatePropertyDto) {
    return this.propertiesService.create(property as Property);
  }
}
