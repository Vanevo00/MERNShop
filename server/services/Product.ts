import { Product } from '../models/Product'
import { ProductType } from '../../types/Product'

export class ProductService {
  async find (
  ): Promise<ProductType[]> {
    return await Product
      .find({})
  }

  async create (args): Promise<ProductType> {
    try {
      return await Product.create({
        ...args
      })
    } catch (err) {
      console.error(err)
    }
  }
}
