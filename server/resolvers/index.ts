import { merge } from 'lodash'
import getProducts from './Product/getProducts'
import addProduct from "./Product/addProduct";

export default merge(
    getProducts,
    addProduct
)
