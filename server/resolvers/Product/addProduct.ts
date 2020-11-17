import { ProductService } from "../../services/Product"
import { IAddProductArgs, IProductDocument } from '../../../types/Product'

const productService = new ProductService()

export default {
    Mutation: {
        addProduct: async (_: undefined, args: IAddProductArgs): Promise<IProductDocument> => await productService.create(args)
    }
}
