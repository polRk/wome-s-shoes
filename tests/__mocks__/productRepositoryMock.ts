import { injectable } from 'inversify'
import { IProduct, ProductStatus } from '../../domain/entities/product'
import { IProductRepository } from '../../repository/product_repository'

@injectable()
export class ProductRepositoryMock implements IProductRepository {
  products: IProduct[] = []

  async getProductBySKU(sku: string): Promise<IProduct | null> {
    return this.products.find((product) => product.sku === sku) || null
  }

  async getActiveProducts(): Promise<IProduct[]> {
    return this.products.filter((product) => product.status === ProductStatus.ACTIVE)
  }

  async getActiveProductIds(): Promise<number[]> {
    return this.products.map((product) => product.id)
  }

  async getActiveProductSKUs(): Promise<string[]> {
    return this.products.map((product) => product.sku)
  }

  async getNewestProducts(limit = 20, offset = 0): Promise<IProduct[]> {
    return this.products.filter((product) => product.status === ProductStatus.ACTIVE).slice(offset, offset + limit)
  }
}
