import { Product } from '../models/Product'
import slugify from 'slugify'
import { IAddProductArgs, IProductDocument } from '../../types/Product'

export class ProductService {
  async find (
  ): Promise<IProductDocument[]> {
    return await Product
      .find({})
  }

  async create (args: IAddProductArgs): Promise<IProductDocument> {
    try {
      const preparedRecipe = this.prepareProductFromArgs(args)
      return await Product.create(preparedRecipe)
    } catch (err) {
      throw new Error(err)
    }
  }

  prepareProductFromArgs (args: IAddProductArgs) {
    return {
      name: args.name,
      slug: slugify(args.name),
      price: args.price,
      mainImage: args.mainImage
    }
  }
}
