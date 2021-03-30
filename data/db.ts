import { ProductEntity, ProductId } from '../domain/entities/product.entity'

export interface Db {
  getProductById(id: ProductId): Promise<ProductEntity | null>

  getProductBySlug(slug: string): Promise<ProductEntity | null>

  getActiveProducts(limit?: number, offset?: number): Promise<ProductEntity[]>

  createProduct(data: ProductEntity): Promise<ProductEntity>

  updateProduct(data: ProductEntity): Promise<ProductEntity>

  deleteProduct(data: ProductEntity): Promise<ProductEntity>
}
