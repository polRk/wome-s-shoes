import { GraphQLClient } from 'graphql-request'
import { inject, injectable } from 'inversify'
import { IProductDto } from '../data/entities/product_dto'
import { IProduct } from '../domain/entities/product'
import { TYPES } from '../types'
import { ProductMapper } from './mappers/productMapper'
import { GET_ACTIVE_PRODUCT_IDS } from './queries/getActiveProductIds'
import { GET_ACTIVE_PRODUCT_SKUS } from './queries/getActiveProductSKUs'
import { GET_NEWEST_PRODUCTS } from './queries/getNewestProducts'
import { GET_PRODUCT_BY_SKU } from './queries/getProductBySKU'

export interface IProductRepository {
  getNewestProducts(limit?: number, offset?: number): Promise<IProduct[]>

  getActiveProductIds(): Promise<number[]>

  getActiveProductSKUs(): Promise<string[]>

  getProductBySKU(sku: string): Promise<IProduct | null>
}

@injectable()
export class ProductRepository implements IProductRepository {
  @inject(TYPES.Client)
  private readonly client!: GraphQLClient

  async getNewestProducts(limit = 20, offset = 0): Promise<IProduct[]> {
    const data = await this.client.request<{ product: IProductDto[] }>(GET_NEWEST_PRODUCTS, { limit, offset })

    return data.product.map((product) => ProductMapper.fromDto<IProductDto, IProduct>(product))
  }

  async getActiveProductIds(): Promise<number[]> {
    const data = await this.client.request<{ product: Pick<IProductDto, 'id'>[] }>(GET_ACTIVE_PRODUCT_IDS)

    return data.product.map((product) => product.id)
  }

  async getActiveProductSKUs(): Promise<string[]> {
    const data = await this.client.request<{ product: Pick<IProductDto, 'sku'>[] }>(GET_ACTIVE_PRODUCT_SKUS)

    return data.product.map((product) => product.sku)
  }

  async getProductBySKU(sku: string): Promise<IProduct | null> {
    const data = await this.client.request<{ product: IProductDto[] }>(GET_PRODUCT_BY_SKU, { sku })
    if (data.product.length === 0) return null

    return ProductMapper.fromDto<IProductDto, IProduct>(data.product[0])
  }
}
