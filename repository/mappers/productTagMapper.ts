import { IProductTagDto } from '../../data/entities/product_tag_dto'
import { IProductTag } from '../../domain/entities/product_tag'

export class ProductTagMapper {
  static fromDto<Dto extends Partial<IProductTagDto>, Entity extends Partial<IProductTag>>(value: Dto): Entity {
    return {
      title: value.title,
    } as Entity
  }

  static toDto<Entity extends Partial<IProductTag>, Dto extends Partial<IProductTagDto>>(value: Entity): Dto {
    return {
      title: value.title,
    } as Dto
  }
}
