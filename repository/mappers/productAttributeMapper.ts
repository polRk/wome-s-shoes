import { IProductAttributeDto } from '../../data/entities/product_attribute_dto'
import { IProductAttribute } from '../../domain/entities/product_attribute'

export class ProductAttributeMapper {
  static fromDto<Dto extends Partial<IProductAttributeDto>, Entity extends Partial<IProductAttribute>>(
    value: Dto
  ): Entity {
    return {
      label: value.label,
      value: value.value,
    } as Entity
  }

  static toDto<Entity extends Partial<IProductAttribute>, Dto extends Partial<IProductAttributeDto>>(
    value: Entity
  ): Dto {
    return {
      label: value.label,
      value: value.value,
    } as Dto
  }
}
