import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'
import extractTextFromHTML from '../extractTextFromHTML'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const MEDIUM_ENDPOINT = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'https%3A%2F%2Fmedium.com%2Ffeed%2F%40otakumesi'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

const fetchArticlesFromMedium = async () => {
  const mediumFeed:YQLApi<RSSFeed> = await fetch(MEDIUM_ENDPOINT)
    .then(items => {
      if(items.status !== 200) {
        return null
      }
      return items.json()
    })
    .catch(err => {
      Sentry.captureException(err)
      return null
    })

  if (!mediumFeed) return null

  if(mediumFeed.query.results.item instanceof Array) {
    return mediumFeed.query.results.item.map(item => {
      return buildMediumArticle(item)
    })
  }

  return Array.of(buildMediumArticle(mediumFeed.query.results.item))
}

const buildMediumArticle = (item:RSSItem) => {
  const description = item.encoded ? extractTextFromHTML(item.encoded).slice(0, 70) : ''
  return {
    uniqueKey: `medium-${item.title}`,
    media: 'Medium',
    title: item.title,
    description: description,
    url: item.link,
    color: '#000000',
    date: format(new Date(item.pubDate), DATETIME_FORMAT)
  }
}

export default fetchArticlesFromMedium
