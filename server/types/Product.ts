import { Document } from "mongoose"

export interface IProduct extends Document {
    name: string
    slug: string
    price: number
    mainImage: string
    updated?: string
    created?: string
}

export interface IAddProductArgs {
    name: IProduct['name']
    price: IProduct['price']
    mainImage: IProduct['mainImage']
}