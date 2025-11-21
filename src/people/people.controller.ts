import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { Person } from './people.schema';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import {
  CreatePersonDto,
  UpdatePersonDto,
  PersonResponseDto,
} from './dto/person.dto';

@ApiTags('people')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new person' })
  @ApiBody({ type: CreatePersonDto })
  @ApiResponse({
    status: 201,
    description: 'Person successfully created',
    type: PersonResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid person data',
  })
  async createPerson(@Body() personData: CreatePersonDto): Promise<Person> {
    return this.peopleService.create(personData as Person);
  }

  @Get()
  @ApiOperation({ summary: 'Get all people' })
  @ApiResponse({
    status: 200,
    description: 'Returns all people',
    type: [PersonResponseDto],
  })
  async findAllPeople(): Promise<Person[]> {
    return this.peopleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get person by ID' })
  @ApiParam({
    name: 'id',
    description: 'Person ID',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns person details',
    type: PersonResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Person not found',
  })
  async findPersonById(@Param('id') id: string): Promise<Person | null> {
    return this.peopleService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update person by ID' })
  @ApiParam({
    name: 'id',
    description: 'Person ID',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiBody({ type: UpdatePersonDto })
  @ApiResponse({
    status: 200,
    description: 'Person successfully updated',
    type: PersonResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Person not found',
  })
  async updatePerson(
    @Param('id') id: string,
    @Body() updateData: UpdatePersonDto,
  ): Promise<Person | null> {
    return this.peopleService.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete person by ID' })
  @ApiParam({
    name: 'id',
    description: 'Person ID',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: 200,
    description: 'Person successfully deleted',
    type: PersonResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Person not found',
  })
  async deletePerson(@Param('id') id: string): Promise<Person | null> {
    return this.peopleService.delete(id);
  }
}
