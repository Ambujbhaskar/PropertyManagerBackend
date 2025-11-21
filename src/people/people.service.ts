import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './people.schema';

@Injectable()
export class PeopleService {
  constructor(@InjectModel(Person.name) private personModel: Model<Person>) {}

  async create(personData: Person): Promise<Person> {
    const newPerson = new this.personModel(personData);
    return newPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async findById(id: string): Promise<Person | null> {
    return this.personModel.findById(id).exec();
  }

  async update(
    id: string,
    updateData: Partial<Person>,
  ): Promise<Person | null> {
    return this.personModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Person | null> {
    return this.personModel.findByIdAndDelete(id).exec();
  }
}
