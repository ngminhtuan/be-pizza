import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShoplistDocument = Document & ShopList

@Schema()
export class ShopList {
    @Prop()
    countryName: string

    @Prop()
    listShop: [{id: string, name: string}]
}

export const ShoplistSchema = SchemaFactory.createForClass(ShopList)
