import {
  ProductEntity,
  ProductStatus,
} from '../../../domain/entities/product.entity'

describe('ProductEntity', () => {
  test('should return valid entity via constructor', () => {
    const product = new ProductEntity(
      'id',
      'slug',
      'title',
      'description',
      ProductStatus.ACTIVE,
      {
        title: 'image',
        width: 640,
        height: 480,
        src: 'path/to/image',
      },
      ['tags'],
      'vendor',
      [
        {
          sku: 'sku',
          color: 'color',
          size: 37,
          price: 100,
          position: 1,
          inventoryQuantity: 1,
          images: [],
        },
      ]
    )

    expect(product.id).toBe('id')
    expect(product.slug).toBe('slug')
    expect(product.title).toBe('title')
    expect(product.description).toBe('description')
    expect(product.status).toBe(ProductStatus.ACTIVE)
    expect(product.tags).toMatchObject(['tags'])
    expect(product.vendor).toBe('vendor')
    expect(product.featuredImage).toMatchObject({
      title: 'image',
      width: 640,
      height: 480,
      src: 'path/to/image',
    })
    expect(product.variants).toMatchObject([
      {
        sku: 'sku',
        color: 'color',
        size: 37,
        price: 100,
        position: 1,
        inventoryQuantity: 1,
        images: [],
      },
    ])
  })
})
