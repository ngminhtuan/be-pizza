import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ShopList, ShoplistDocument } from 'src/schemas/shoplist.schema';
import { Country, CountryDocument } from 'src/schemas/country,schema';
import { Model } from 'mongoose';
import { CreateShopListDto, ListShopPerCountryDto } from 'src/dtos/create-shoplist.dto';

@Injectable()
export class ShoplistService {
  constructor(
    @InjectModel(ShopList.name) private readonly modelShopList: Model<ShoplistDocument>,
    @InjectModel(Country.name) private readonly modelCountry: Model<CountryDocument>
  ) { }

  //Service get all shop list
  async findAll(): Promise<ShopList[]> {
    return await this.modelShopList.find()
  }

  //Service get shop list by country name
  async shoplist(countryName: string): Promise<ShopList> {
    const countryList = await this.modelCountry.find()
    const checkCountryExisted = countryList.some(item => item.name === countryName)
    
    if (!checkCountryExisted) {
      throw new NotFoundException('shop list not found')
    }

    return await this.modelShopList.findOne({ countryName }, { _id: 0 }).exec()
  }

  //Service create a whole new country shop list
  async create(createShopList: CreateShopListDto): Promise<ShopList> {
    const countryList = await this.modelCountry.find()
    const checkCountryExisted = countryList.some(item => item.name.toLocaleLowerCase() === createShopList.countryName.toLocaleLowerCase())
    if (!createShopList.countryName || checkCountryExisted) {
      throw new BadRequestException('Country name is missing or already existed')
    }

    return await new this.modelShopList({
      ...createShopList,
    }).save();
  }

  //Service add shop list for exist country
  async addShopList(id: string, addShopList: Array<ListShopPerCountryDto>): Promise<ShopList> {

    if (addShopList.length === 0 || addShopList.length === undefined) {
      throw new BadRequestException('Somethings went wrong')
    }
    const listShop = await this.modelShopList.findById(id)

    const ids = new Set(listShop.listShop.map(d => d.id));
    const mergedList = [...listShop.listShop, ...addShopList.filter(d => !ids.has(d.id))];
    
    const newListShop = { "listShop": mergedList }

    return await this.modelShopList.findByIdAndUpdate(id, newListShop, { new: true }).exec()
  }

  //Modifile shop list for exist country
  async updateShopList(id: string, updateShop: any): Promise<ShopList> {
    const keys = Object.keys(updateShop);
    const checkType = (typeof updateShop.id || typeof updateShop.name) === "string"
    
    if (!id || !checkType || !updateShop.id || !updateShop.name || updateShop.length >= 0 || keys.length > 2) throw new BadRequestException('Somethings went wrong')
    
    const listShop = await this.modelShopList.findById(id);
    const result = listShop.listShop.map((item) => item.id === updateShop.id ? updateShop : item);
    const shopFinal = { "listShop": result}
    
    return await this.modelShopList.findByIdAndUpdate(id, shopFinal, { new: true }).exec()
  }

  //Delete shop list for exist country
  async deleteShopList(id: string, idShop: any): Promise<ShopList> {
    const listShop = await this.modelShopList.findById(id);
    const result = listShop.listShop.filter((item) => item.id !== idShop.id)
    const shopFinal = { "listShop": result}
    
    return await this.modelShopList.findByIdAndUpdate(id, shopFinal, {new: true}).exec()
  }
}
