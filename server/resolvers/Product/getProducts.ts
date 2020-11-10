import { ProductService } from '../../services/Product'
import { IProduct } from '../../types/Product'


const productService = new ProductService()

export default {
  Query: {
    getProducts: async (): Promise<IProduct[]> => await productService.find(),
  },
}
