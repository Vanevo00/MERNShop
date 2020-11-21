import { Document } from 'mongoose'

export interface IProduct {
    name: string
    slug: string
    price: number
    mainImage: string
    featured?: boolean
    updated?: string
    created?: string
}

export interface IProductDocument extends Document, IProduct {}

export interface IAddProductArgs {
    name: IProduct['name']
    price: IProduct['price']
    mainImage: IProduct['mainImage']
    featured?: IProduct['featured']
}
