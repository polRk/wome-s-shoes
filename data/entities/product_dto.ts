import { ICategoryDto } from './category_dto'
import { IInventoryItemDto } from './inventory_item_dto'
import { IProductAttributeDto } from './product_attribute_dto'
import { IProductImageDto } from './product_image_dto'
import { IProductTagDto } from './product_tag_dto'

export interface IProductDto {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string | null
  sku: string
  cost: number
  price: number
  status: string
  category_id: number | null
  thumbnail: string
  vendor: string | null

  category: ICategoryDto | null

  inventory_items: IInventoryItemDto[]

  product_attributes: IProductAttributeDto[]

  product_images: IProductImageDto[]

  product_tags: IProductTagDto[]
}
