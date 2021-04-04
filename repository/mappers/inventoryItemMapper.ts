import { IInventoryItemDto } from '../../data/entities/inventory_item_dto'
import { IInventoryItem } from '../../domain/entities/inventory_item'

export class InventoryItemMapper {
  static fromDto<Dto extends Partial<IInventoryItemDto>, Entity extends Partial<IInventoryItem>>(value: Dto): Entity {
    return {
      id: value.id,
      sku: value.sku,
      cost: value.cost,
      size: value.size,
    } as Entity
  }

  static toDto<Entity extends Partial<IInventoryItem>, Dto extends Partial<IInventoryItemDto>>(value: Entity): Dto {
    return {
      id: value.id,
      sku: value.sku,
      cost: value.cost,
      size: value.size,
    } as Dto
  }
}
