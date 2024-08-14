import type { BookInfo } from "~/types/book"
import { useHttp } from "../utils/http"

export const getBooksListCSV = async () => {
  const res = await useHttp('/books', 'GET')
  return res.data as BookInfo[]
}
