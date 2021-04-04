export interface ICategory {
  id: number
  title: string
  slug: string

  parentCategory: ICategory | null

  subCategories: ICategory[]
}
