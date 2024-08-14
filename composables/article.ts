import { useHttp } from "../utils/http"
import type { ArticleInfo } from "../types/article"

export const getRawArticlesWithoutMapping = async () => {
  const res = await useHttp('/article/all', 'GET')
  return res.data as string[]
}

export const GetArticleContent = async (tag: string, name: string) => {
  const res = await useHttp(`/articles/${tag}/${name}`, 'GET')
  return res.data as string
}

export const PostArticle = async (data: ArticleInfo) => {
  const res = await useHttp('/article', 'POST', data)
  return res
}
