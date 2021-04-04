import { ICategoryDto } from '../../data/entities/category_dto'
import { ICategory } from '../../domain/entities/category'

export class CategoryMapper {
  static fromDto<Dto extends Partial<ICategoryDto>, Entity extends Partial<ICategory>>(value: Dto): Entity {
    return {
      id: value.id,
      slug: value.slug,
      title: value.title,
      parentCategory: value.parent_category ? CategoryMapper.fromDto(value.parent_category) : null,
      subCategories: value.sub_category?.map(CategoryMapper.fromDto),
    } as Entity
  }

  static toDto<Entity extends Partial<ICategory>, Dto extends Partial<ICategoryDto>>(value: Entity): Dto {
    return {
      id: value.id,
      slug: value.slug,
      title: value.title,
      parent_category_id: value.parentCategory?.id || null,
      parent_category: value.parentCategory ? CategoryMapper.toDto(value.parentCategory) : null,
      sub_category: value.subCategories?.map(CategoryMapper.toDto),
    } as Dto
  }
}
