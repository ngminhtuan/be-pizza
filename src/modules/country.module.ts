import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from 'src/controllers/country/country.controller';
import { Country, CountrySchema } from 'src/schemas/country,schema';
import { CountryService } from 'src/services/country/country.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])
    ],
    controllers: [CountryController],
    providers: [CountryService]
})
export class CountryModule { }