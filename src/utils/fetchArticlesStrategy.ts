import * as format from 'date-fns/format'
import { orderBy } from 'lodash-es'
import * as X2JS from 'x2js'

const QIITA_ENDPOINT = 'https://qiita.com/api/v2/users/otakumesi/items'
const SCRAPBOX_ENDPOINT = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'https%3A%2F%2Fscrapbox.io%2Fapi%2Fpages%2Fotakumesi'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
const HATENA_BLOG_ENDPOINT = 'http://otakumesi.hatenablog.jp/rss'
const GITHUB_ENDPOINT = 'https://api.github.com/users/otakumesi/repos?sort=updated'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

type MaybeArticleSet = (ArticleStore[] | null)[]

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
  return orderBy(articles as ArticleStore[], 'date', 'desc')
}

const fetchArticlesFromQiita = async () => {
  const qiitaItems:QiitaApiItem[] = await fetch(QIITA_ENDPOINT)
    .then(items => {
      if(items.status === 200) {
        return items.json()
      } else {
        return null
      }
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
      media: 'Qiita',
      title: item.title,
      description: item.body.slice(0, 29),
      url: item.url,
      color: '#4cb10d',
      date: format(item.updated_at, DATETIME_FORMAT)
    }
  })
}

const fetchArticlesFromScrapbox = async () => {
  const scrapboxApi:YQLApi<ScrapboxApiPages> = await fetch(SCRAPBOX_ENDPOINT)
    .then(pages => {
      return pages.json()
    })
    .catch(err => {
      return null
    })

  if(!scrapboxApi) {
    return null
  }

  return scrapboxApi.query.results.json.pages.map(item => {
    return {
      uniqueKey: `scrapbox-${item.title}`,
      media: 'scrapbox',
      title: item.title,
      description: item.descriptions.join(' ').slice(0, 30),
      url: `https://scrapbox.io/otakumesi/${item.title}`,
      color: '#39ac86',
      date: format(new Date(item.updated * 1000), DATETIME_FORMAT)
    }
  })
}

const fetchArticlesFromHatenaBlog = async () => {
  const x2js = new X2JS()
  const hatenaBlogRSSText = await fetch(HATENA_BLOG_ENDPOINT)
    .then(items => {
      return items.text()
    })
    .catch(err => {
      return null
    })

  if(!hatenaBlogRSSText) {
    return null
  }

  const hatenaBlogRSS:HatenaBlogRSS = x2js.xml2js(hatenaBlogRSSText)

  return hatenaBlogRSS.rss.channel.item.map(item => {
    return {
      uniqueKey: `hatena-blog-${item.title}`,
      media: 'HatenaBlog',
      title: item.title,
      description: item.description.slice(0, 30),
      url: item.link,
      color: '#008fde',
      date: format(new Date(item.pubDate), DATETIME_FORMAT)
    }
  })
}

const fetchRepositoriesFromGithub = async () => {
  const githubRepositories:GithubRepository[] = await fetch(GITHUB_ENDPOINT)
    .then(repository => {
      return repository.json()
    })
    .catch(err => {
      return null
    })

  return githubRepositories
    .filter(repo => repo.fork === false)
    .map(repo => {
        return {
          uniqueKey: `github-${repo.name}`,
          media: 'Github',
          title: repo.name,
          description: repo.description,
          url: repo.html_url,
          color: '#333',
          date: format(new Date(repo.updated_at), DATETIME_FORMAT)
        }
    })
}

const FETCH_ARTICLES_STRATEGIES = [
  fetchArticlesFromQiita,
  fetchArticlesFromScrapbox,
  fetchArticlesFromHatenaBlog,
  fetchRepositoriesFromGithub
]

export default fetchArticles
