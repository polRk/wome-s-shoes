import { IProductImageDto } from '../../data/entities/product_image_dto'
import { IProductImage } from '../../domain/entities/product_image'

export class ProductImageMapper {
  static fromDto<Dto extends Partial<IProductImageDto>, Entity extends Partial<IProductImage>>(value: Dto): Entity {
    return {
      title: value.title,
      src: value.src,
    } as Entity
  }

  static toDto<Entity extends Partial<IProductImage>, Dto extends Partial<IProductImageDto>>(value: Entity): Dto {
    return {
      title: value.title,
      src: value.src,
    } as Dto
  }
}
