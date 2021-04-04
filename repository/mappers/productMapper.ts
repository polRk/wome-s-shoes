import { IProductDto } from '../../data/entities/product_dto'
import { IProduct, ProductStatus } from '../../domain/entities/product'
import { CategoryMapper } from './categoryMapper'
import { InventoryItemMapper } from './inventoryItemMapper'
import { ProductAttributeMapper } from './productAttributeMapper'
import { ProductImageMapper } from './productImageMapper'
import { ProductTagMapper } from './productTagMapper'

export class ProductMapper {
  static fromDto<Dto extends Partial<IProductDto>, Entity extends Partial<IProduct>>(value: Dto): Entity {
    return {
      id: value.id,
      createdAt: value.created_at ? new Date(value.created_at) : undefined,
      updatedAt: value.updated_at ? new Date(value.updated_at) : undefined,
      title: value.title,
      description: value.description,
      thumbnail: value.thumbnail,
      sku: value.sku,
      cost: value.cost,
      price: value.price,
      status: value.status as ProductStatus,
      vendor: value.vendor,

      category: value.category ? CategoryMapper.fromDto(value.category) : null,

      inventoryItems: value.inventory_items?.map(InventoryItemMapper.fromDto),

      attributes: value.product_attributes?.map(ProductAttributeMapper.fromDto),

      images: value.product_images?.map(ProductImageMapper.fromDto),

      tags: value.product_tags?.map(ProductTagMapper.fromDto),
    } as Entity
  }

  static toDto<Entity extends Partial<IProduct>, Dto extends Partial<IProductDto>>(value: Entity): Dto {
    return {
      id: value.id,
      created_at: value.createdAt?.toISOString(),
      updated_at: value.updatedAt?.toISOString(),
      title: value.title,
      description: value.description,
      sku: value.sku,
      cost: value.cost,
      price: value.price,
      status: value.status,
      category_id: value.category?.id || null,
      thumbnail: value.thumbnail,
      vendor: value.vendor,

      category: value.category ? CategoryMapper.toDto(value.category) : null,

      inventory_items: value.inventoryItems?.map(InventoryItemMapper.toDto),

      product_attributes: value.attributes?.map(ProductAttributeMapper.toDto),

      product_images: value.images?.map(ProductImageMapper.toDto),

      product_tags: value.tags?.map(ProductTagMapper.toDto),
    } as Dto
  }
}
