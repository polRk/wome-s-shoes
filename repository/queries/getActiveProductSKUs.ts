import { gql } from 'graphql-request'
import { ProductStatus } from '../../domain/entities/product'

export const GET_ACTIVE_PRODUCT_SKUS = gql`
  query GetActiveProductSKUs {
    product(where: { status: { _eq: ${ProductStatus.ACTIVE} } }) {
      sku
    }
  }
`
