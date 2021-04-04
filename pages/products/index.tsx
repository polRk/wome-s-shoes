import { omit } from 'lodash'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IProduct } from '../../domain/entities/product'
import { container } from '../../inversify.config'
import { IProductRepository } from '../../repository/product_repository'
import { TYPES } from '../../types'

export interface ProductsProps {
  products: Omit<IProduct, 'cost'>[]
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="product" key={product.sku}>
          <h1>{product.title}</h1>
          <Image
            src={product.thumbnail}
            width={640}
            height={480}
            loading={'lazy'}
            objectFit={'cover'}
            alt={product.title}
          />
          <span>{product.sku}</span>
          <Link href="/products/[sku]" as={`/products/${product.sku}`}>
            More
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const repository = container.get<IProductRepository>(TYPES.ProductRepository)
  const products = await repository.getNewestProducts()

  return {
    props: {
      products: products.map((product) => {
        return omit(product, 'cost')
      }),
    },
  }
}
