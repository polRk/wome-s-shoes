import { IProduct, ProductStatus } from '../../domain/entities/product'

export const productMock: IProduct = {
  id: 1,
  createdAt: new Date(2020),
  updatedAt: new Date(2020),
  attributes: [
    { label: 'Материал верха', value: 'текстиль' },
    { label: 'Внутренний материал', value: 'текстиль' },
    { label: 'Материал подошвы', value: 'искусственный материал' },
    { label: 'Материал стельки', value: 'текстиль' },
    { label: 'Сезон', value: 'мульти' },
    { label: 'Цвет', value: 'белый' },
    { label: 'Вид спорта', value: 'спорт стиль' },
    { label: 'Страна производства', value: 'Индонезия' },
    { label: 'Застежка', value: 'шнурки' },
    { label: 'Застежка', value: 'шнурки' },
  ],
  category: {
    id: 1,
    slug: 'men',
    title: 'Мужская обувь',
    parentCategory: null,
    subCategories: [],
  },
  cost: 5000,
  description:
    'Кроссовки Nike Air Max 270 — первая повседневная модель Nike Air Max со стильной и удобной увеличенной воздушной вставкой. ' +
    'Конструкция, дизайн которой вдохновлен легендарными моделями Air Max, акцентирует внимание на инновационной технологии Nike благодаря большому прозрачному «окну» Air и свежей расцветке.',
  images: [
    { title: 'Вид сбоку', src: 'https://static.nike.com/a/images/t_PDP_1728_v1/air-max-270-ess-NtlbS6.png' },
    { title: 'Вид снизу', src: 'https://static.nike.com/a/images/t_PDP_864_v1/air-max-270-ess-NtlbS6.png' },
    { title: 'Вид свеху', src: 'https://static.nike.com/a/images/t_PDP_864_v1/air-max-270-ess-NtlbS6.png' },
    { title: 'Вид спереди', src: 'https://static.nike.com/a/images/t_PDP_864_v1/air-max-270-ess-NtlbS6.png' },
    { title: 'Вид сзади', src: 'https://static.nike.com/a/images/t_PDP_864_v1/air-max-270-ess-NtlbS6.png' },
  ],
  inventoryItems: [
    { id: 1, sku: 'DM2462-002', cost: 5000, size: 39 },
    { id: 1, sku: 'DM2462-002', cost: 5000, size: 40 },
    { id: 1, sku: 'DM2462-002', cost: 5000, size: 41 },
    { id: 1, sku: 'DM2462-002', cost: 5000, size: 42 },
    { id: 1, sku: 'DM2462-002', cost: 5000, size: 43 },
    { id: 1, sku: 'DM2462-002', cost: 5000, size: 44 },
  ],
  price: 12999,
  sku: 'DM2462-002',
  status: ProductStatus.ACTIVE,
  tags: [{ title: 'спорт' }],
  thumbnail: 'https://static.nike.com/a/images/air-max-270-ess-NtlbS6.png',
  title: 'Кроссовки Air Max 270 Ess',
  vendor: 'Nike',
}
