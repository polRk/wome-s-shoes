export interface ICategoryDto {
  id: number
  title: string
  slug: string
  parent_category_id: number | null

  parent_category: ICategoryDto | null

  sub_category: ICategoryDto[]
}
