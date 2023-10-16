import { Module } from '@nestjs/common';
import { ShoplistController } from 'src/controllers';
import { ShoplistService } from 'src/services';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopList, ShoplistSchema } from 'src/schemas/shoplist.schema';
import { Country, CountrySchema } from 'src/schemas/country,schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: ShopList.name, schema: ShoplistSchema }]),
        MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])
    ],
    controllers: [ShoplistController],
    providers: [ShoplistService]
})
export class ShoplistModule { }
