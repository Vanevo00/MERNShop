import { Schema, model } from 'mongoose'
import { ProductType } from "../../types/Product";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  updated: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export const Product = model<ProductType>('product', ProductSchema)
