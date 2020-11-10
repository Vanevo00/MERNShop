import { ProductService } from "../../services/Product"
import { IAddProductArgs, IProduct } from '../../types/Product'

const productService = new ProductService()

export default {
    Mutation: {
        addProduct: async (_: undefined, args: IAddProductArgs): Promise<IProduct> => await productService.create(args)
    }
}