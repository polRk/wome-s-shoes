import { gql } from 'graphql-request'

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on product {
    id
    title
    thumbnail
    sku
    cost
    price
    description
    status
    vendor
    category {
      title
    }
    inventory_items {
      size
    }
    product_attributes {
      label
      value
    }
    product_images {
      title
      src
    }
    product_tags {
      title
    }
  }
`
