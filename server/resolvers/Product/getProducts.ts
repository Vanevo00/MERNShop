import { ProductService } from '../../services/Product'
import { IProductDocument } from '../../../types/Product'
import { IPaginator } from '../../../types/Paginator'
import { ISorting } from '../../../types/Sorting'
import { IProductFilters } from '../../../types/ProductFilters'

interface IGetProductsArgs {
  paginator: IPaginator
  sorting: ISorting
  filters: IProductFilters
}

const productService = new ProductService()

export default {
  Query: {
    getProducts: async (
      _: undefined,
      args: IGetProductsArgs
    ): Promise<IProductDocument[]> => {
      const {
        paginator,
        sorting,
        filters
      } = args

      return await productService.find(paginator, sorting, filters)
    }
  }
}
