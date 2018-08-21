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

interface HatenaBlogItem {
  title: string
  link: string
  description: string
  pubDate: string
}

interface HatenaBlogFeed {
  title: string
  item: HatenaBlogItem[]
}

interface HatenaBlogChannel {
  channel: HatenaBlogFeed
}

interface HatenaBlogRSS {
  rss: HatenaBlogChannel
}

interface ArticleActionType {
  type: string
  payload: { articles: ArticleStore[] } | undefined
}

type ArticleActionDispatcher = (action: ArticleActionType) => void

interface ArticleStore {
  uniqueKey: string
  media: string
  date: string
  title: string
  description: string
  url: string
  color: string;
}

interface ArticleState {
  articles: ArticleStore[]
  dispatch: ArticleActionDispatcher | null | undefined
}

