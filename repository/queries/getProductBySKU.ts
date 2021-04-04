import { gql } from 'graphql-request'
import { PRODUCT_FRAGMENT } from '../fragments/product.fragment'

export const GET_PRODUCT_BY_SKU = gql`
  query GetNewestProducts($sku: String) {
    product(where: { sku: { _eq: $sku } }) {
      ...ProductFragment
    }
  }

  ${PRODUCT_FRAGMENT}
`
