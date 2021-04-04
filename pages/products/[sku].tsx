import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { IProduct } from '../../domain/entities/product'
import { container } from '../../inversify.config'
import { IProductRepository } from '../../repository/product_repository'
import { TYPES } from '../../types'

export interface ProductsProps {
  product: IProduct
}

export const Product: React.FC<ProductsProps> = ({ product }) => {
  if (!product) return <h1>Not found</h1>

  return (
    <div className="product" key={product.id}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.thumbnail} width={640} height={480} objectFit={'cover'} alt={product.title} />
    </div>
  )
}

export default Product

export const getStaticProps: GetStaticProps = async (context) => {
  const sku = context.params?.sku as string

  const repository = container.get<IProductRepository>(TYPES.ProductRepository)
  const product = await repository.getProductBySKU(sku)

  return {
    props: { product },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repository = container.get<IProductRepository>(TYPES.ProductRepository)
  const result = await repository.getActiveProductSKUs()

  return {
    paths: result.map((sku) => ({ params: { sku: sku } })),
    fallback: true,
  }
}
