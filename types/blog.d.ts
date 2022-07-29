import { query as q } from 'faunadb'

export type IBlogPost = {
  title: string
  slug: string
  content: string
  datePublished: any
  category: string
  excerpt: string
  featuredImage: string
  featured?: boolean
  author: {
    name: string
    picture: string
    designation: string
  }
}
export type IBlogPostWrapper = {
  ref: typeof q.Ref | object
  ts: number
  data: BlogPostDataType
}
