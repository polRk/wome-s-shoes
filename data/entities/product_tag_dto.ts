import { IProductDto } from './product_dto'

export interface IProductTagDto {
  product_id: number
  title: string

  product: IProductDto
}
