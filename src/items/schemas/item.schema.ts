import * as mongoose from 'mongoose';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  qty: Number,
});

// @Schema()
// export class Item {
//   @Prop({ required: true })
//   name: string;

//   @Prop()
//   description: string;

//   @Prop()
//   qty: number;
// }

// export const ItemSchema = SchemaFactory.createForClass(Item);
