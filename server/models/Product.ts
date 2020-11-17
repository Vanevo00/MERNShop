import { Schema, model } from 'mongoose'
import { IProductDocument } from '../../types/Product'

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  mainImage: {
    type: String,
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

export const Product = model<IProductDocument>('product', ProductSchema)
