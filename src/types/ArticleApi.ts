interface QiitaApiItem {
  title: string
  body: string
  url: string
  updated_at: string
}

type QiitaApiItems = QiitaApiItem[]


interface ScrapboxApiPage {
  title: string
  descriptions: string[]
  updated: number
}

interface ScrapboxApiPages {
  pages: ScrapboxApiPage[]
}

interface YQLResults<T> {
  json: T
}

interface YQLQuery<T> {
  results: YQLResults<T>
}

interface YQLApi<T> {
  query: YQLQuery<T>
}

export {
  QiitaApiItems,
  ScrapboxApiPages,
  YQLApi
}
