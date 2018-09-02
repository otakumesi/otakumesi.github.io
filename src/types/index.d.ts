interface QiitaApiItem {
  title: string
  body: string
  url: string
  updated_at: string
}

interface ScrapboxApiPage {
  title: string
  descriptions: string[]
  updated: number
}

interface ScrapboxApiPages {
  json: {
    pages: ScrapboxApiPage[]
  }
}

interface HatenaBlogItem {
  title: string
  link: string
  description: string
  pubDate: string
}

interface HatenaBlogFeed {
  item: HatenaBlogItem[]
}

interface YQLApi<T> {
  query: {
    results: T
  }
}

interface GithubRepository {
  fork: boolean
  name: string
  html_url: string
  description: string
  updated_at: string
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
  dispatch?: ArticleActionDispatcher
}

