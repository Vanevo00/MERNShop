import { Product } from '../models/Product'
import slugify from 'slugify'
import { IAddProductArgs, IProductDocument } from '../../types/Product'
import { DefaultPaginator, IPaginator } from '../../types/Paginator'
import { DefaultSorting, ISorting } from '../../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'
import { IProductFilters } from '../../types/ProductFilters'

export class ProductService {
  async find (
    paginator: IPaginator = DefaultPaginator,
    sorting: ISorting = DefaultSorting,
    filters: IProductFilters = {}
  ): Promise<IProductDocument[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await Product
      .find(filters)
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
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
      mainImage: args.mainImage,
      featured: args.featured
    }
  }
}
