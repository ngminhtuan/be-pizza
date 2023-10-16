import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryDto } from 'src/dtos/create-country.dto';
import { Country, CountryDocument } from 'src/schemas/country,schema';

@Injectable()
export class CountryService {
    constructor(@InjectModel(Country.name) private readonly countryModel: Model<CountryDocument>) {}

    async getAllCountry() {
        return await this.countryModel.find()
    }

    async createCountry(country: CountryDto): Promise<Country> {
        if (!country.name || typeof country.status !== "boolean") throw new BadRequestException('Somethings went wrong')
        
        return await new this.countryModel({
            ...country,
            createdAt: new Date(),
          }).save();
    }

    async updateCountry(id: string , updateCountry: CountryDto): Promise<Country> {
        return await this.countryModel.findByIdAndUpdate(id, updateCountry, {new: true})
    }

    async deleteCountry(id: string): Promise<Country> {
        return await this.countryModel.findByIdAndDelete(id, {new: true})
    }
}
