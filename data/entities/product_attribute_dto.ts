import { IProductDto } from './product_dto'

export interface IProductAttributeDto {
  product_id: number
  label: string
  value: string

  product: IProductDto
}
