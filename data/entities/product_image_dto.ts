import { IProductDto } from './product_dto'

export interface IProductImageDto {
  product_id: number
  title: string
  src: string

  product: IProductDto
}
