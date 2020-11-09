import { ProductService } from '../../services/Product'
import { ProductType } from '../../../types/Product'

const productService = new ProductService()

export default {
  Query: {
    getProducts: async (): Promise<ProductType[]> => await productService.find(),
  },
}
