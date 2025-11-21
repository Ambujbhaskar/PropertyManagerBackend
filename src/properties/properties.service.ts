import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from './property.schema';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<Property>,
  ) {}

  async findAll(): Promise<Property[]> {
    return this.propertyModel.find().exec();
  }

  async create(property: Property): Promise<Property> {
    const newProperty = new this.propertyModel(property);
    return newProperty.save();
  }
}
