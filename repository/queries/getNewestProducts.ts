import { gql } from 'graphql-request'
import { ProductStatus } from '../../domain/entities/product'
import { PRODUCT_FRAGMENT } from '../fragments/product.fragment'

export const GET_NEWEST_PRODUCTS = gql`
  query GetNewestProducts($offset: Int, $limit: Int) {
    product(where: {
      status: { _eq: ${ProductStatus.ACTIVE} } },
      order_by: [{created_at: desc}],
      limit: $limit,
      offset: $offset
    ) {
      ...ProductFragment
    }
  }

  ${PRODUCT_FRAGMENT}
`
