import { Document } from 'mongoose'

export interface ProductType extends Document {
  _id: string
  name: string
  price: number
}
