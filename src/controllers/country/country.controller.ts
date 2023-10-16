import { Body, Param, Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { CountryDto } from 'src/dtos/create-country.dto';
import { CountryService } from 'src/services/country/country.service';

@Controller('country')
export class CountryController {
    constructor(private readonly countrySevice: CountryService) {}

    @Get()
    async getCountries(){
        return await this.countrySevice.getAllCountry()
    }

    @Post()
    async create(@Body() country: CountryDto) {
        return await this.countrySevice.createCountry(country)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() country: CountryDto) {
        return await this.countrySevice.updateCountry(id, country)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.countrySevice.deleteCountry(id)
    }
}
