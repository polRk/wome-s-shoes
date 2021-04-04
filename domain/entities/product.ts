import { ICategory } from './category'
import { IInventoryItem } from './inventory_item'
import { IProductAttribute } from './product_attribute'
import { IProductImage } from './product_image'
import { IProductTag } from './product_tag'

export type ProductId = string

export enum ProductStatus {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  DRAFT = 'draft',
}

export interface IProduct {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  description: string | null
  thumbnail: string
  sku: string
  cost: number
  price: number
  status: ProductStatus
  vendor: string | null
  category: ICategory | null
  inventoryItems: IInventoryItem[]
  attributes: IProductAttribute[]
  images: IProductImage[]
  tags: IProductTag[]
}
