import { ProductService } from '../../services/Product'
import { IProductDocument } from '../../../types/Product'

const productService = new ProductService()

export default {
  Query: {
    getProducts: async (): Promise<IProductDocument[]> => await productService.find()
  }
}
