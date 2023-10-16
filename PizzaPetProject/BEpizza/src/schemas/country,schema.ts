import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountryDocument = Document & Country

@Schema()
export class Country {
    @Prop()
    name: string

    @Prop()
    status: Boolean
}

export const CountrySchema = SchemaFactory.createForClass(Country)