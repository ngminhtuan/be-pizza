import { Controller, Post, Get, Patch, Body, Param, Delete } from '@nestjs/common';
import { CreateShopListDto, ListShopPerCountryDto } from 'src/dtos/create-shoplist.dto';
import { ShoplistService } from 'src/services';

@Controller('shoplist')
export class ShoplistController {
  constructor(private readonly shopListService: ShoplistService) { }

  //Get all shop list from all country
  @Get()
  async getAll(){
    return await this.shopListService.findAll()
  }

  //Get shop list by country name
  @Get(":countryName")
  async shoplist(@Param('countryName') @Body() countryName: string) {
    return await this.shopListService.shoplist(countryName)
  }

  //Create a whole new country shop list
  @Post()
  async create(@Body() createShopList: CreateShopListDto) {
    return await this.shopListService.create(createShopList);
  }

  //Add shop list for exist country
  @Post(':id')
  async addShopList(@Param('id') id: string, @Body() addShopList: Array<ListShopPerCountryDto>) {
    return await this.shopListService.addShopList(id, addShopList)
  }

  //Modifile shop list for exist country
  @Patch(':id')
  async updateShopList(@Param('id') id: string, @Body() updateShop: any ) {
    return await this.shopListService.updateShopList(id, updateShop)
  }
  
  //Delete shop list for exist country
  @Delete(':id')
  async deleteShoplist(@Param('id') id: string, @Body() idShop: string){
    return await this.shopListService.deleteShopList(id, idShop)
  }
}
