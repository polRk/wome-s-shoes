import { gql } from 'graphql-request'

export const GET_ACTIVE_PRODUCT_IDS = gql`
  query GetActiveProductIds {
    product(where: { status: { _eq: active } }) {
      id
    }
  }
`
