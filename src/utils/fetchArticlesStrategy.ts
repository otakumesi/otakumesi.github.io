import * as format from 'date-fns/format'

import ArticleStore from '../types/ArticleStore'
import {
  QiitaApiItems,
  YQLApi,
  ScrapboxApiPages
} from '../types/ArticleApi'

type MaybeArticleSet = (ArticleStore[] | null)[]

const QIITA_ENDPOINT = 'https://qiita.com/api/v2/users/otakumesi/items'
const SCRAPBOX_ENDPOINT = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'https%3A%2F%2Fscrapbox.io%2Fapi%2Fpages%2Fotakumesi'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
// const HATENA_BLOG = 'http://otakumesi.hatenablog.jp/rss'

const fetchArticles = async () => {
  const articles = await Promise.all(FETCH_ARTICLES_STRATEGIES.map(strategy => strategy()))
    .then((articlesSet:MaybeArticleSet) => {
      return articlesSet.reduce((res, item) => {
        if (res && item) {
         return res.concat(item)
        }
        return res
      }, [])
    })
  return articles as ArticleStore[]
}

const fetchArticlesFromQiita = async () => {
  const qiitaItems:QiitaApiItems = await fetch(QIITA_ENDPOINT)
    .then(items => {
      return items.json()
    })
    .catch(err => {
      return null
    })

  if(!qiitaItems) {
    return null
  }

  return qiitaItems.map(item => {
    return {
      uniqueKey: `qiita-${item.title}`,
      media: 'qiita',
      title: item.title,
      description: item.body.slice(0, 29),
      url: item.url,
      color: '#4cb10d',
      date: format(item.updated_at, 'YYYY/MM/DD')
    }
  })
}

const fetchArticlesFromScrapbox = async () => {
  const scrapboxApi:YQLApi<ScrapboxApiPages> = await fetch(SCRAPBOX_ENDPOINT)
    .then(pages => {
      return pages.json()
    })
    .catch(err => {
      console.log(err)
      return null
    })

  if(!scrapboxApi) {
    return null
  }

  console.log(scrapboxApi)
  return scrapboxApi.query.results.json.pages.map((item):ArticleStore => {
    return {
      uniqueKey: `scrapbox-${item.title}`,
      media: 'scrapbox',
      title: item.title,
      description: item.descriptions.join(' ').slice(0, 30),
      url: `https://scrapbox.io/otakumesi/${item.title}`,
      color: '#39ac86',
      date: format(new Date(item.updated * 1000), 'YYYY/MM/DD')
    }
  })
}

// const fetchArticlesFromHatenaBlog = async () => {
// }

const FETCH_ARTICLES_STRATEGIES = [
  fetchArticlesFromQiita,
  fetchArticlesFromScrapbox,
  //  fetchArticlesFromHatenaBlog
]

export default fetchArticles
