import { ProductType } from "../../../types/Product"
import { ProductService } from "../../services/Product"

const productService = new ProductService()

export default {
    Mutation: {
        addProduct: async (_, args): Promise<ProductType> => await productService.create(args)
    }
}