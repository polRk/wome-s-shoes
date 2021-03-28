export type ProductId = string

export enum ProductStatus {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  DRAFT = 'draft',
}

export interface IProductImage {
  // Название изображения
  title: string

  // Ширина исходного изображения.
  width: number

  // Высота исходного изображения.
  height: number

  // Местоположение файла.
  src: string
}

export interface IProductVariant {
  // Уникальный артикул варианта.
  sku: string

  // Цвет варианта.
  color: string

  // Размер варианта.
  size: number

  // Цена варианта.
  price: number

  // Изображения варианта.
  images: IProductImage[]

  // Порядок в списке вариантов.
  position: number

  // Совокупность запасов по всем местоположениям.
  inventoryQuantity: number
}

export interface IProduct {
  // Уникальный идентификатор продукта.
  id: ProductId

  // Адрес, по которому будет доступен продукт.
  slug: string

  // Название продукта.
  title: string

  // Описание продукта.
  description: string

  // Статус продукта.
  status: ProductStatus

  // Основное изображение продукта.
  featuredImage: IProductImage

  // Массив тегов.
  tags: string[]

  // Производитель продукта.
  vendor: string

  // Варианты продукта.
  variants: IProductVariant[]
}

export class ProductEntity implements IProduct {
  constructor(
    private _id: string,
    private _slug: string,
    public title: string,
    public description: string,
    public status: ProductStatus,
    public featuredImage: IProductImage,
    public tags: string[],
    public vendor: string,
    public variants: IProductVariant[]
  ) {}

  get id(): string {
    return this._id
  }

  get slug(): string {
    return this._slug
  }
}
