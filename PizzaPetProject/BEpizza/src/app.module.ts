import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoplistModule, AuthModule, CountryModule } from './modules/';

@Module({
  imports: [ShoplistModule, CountryModule, MongooseModule.forRoot('mongodb+srv://tuannguyen:Minhtuan123@cluster1.brx3mb4.mongodb.net/Do_List?retryWrites=true&w=majority'), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
