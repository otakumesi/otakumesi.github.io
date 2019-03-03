import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'
import extractTextFromHTML from '../extractTextFromHTML'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const MEDIUM_ENDPOINT = ""

const fetchArticlesFromMedium = async () => {
  const mediumFeed = await fetch(MEDIUM_ENDPOINT)
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
    return mediumFeed.query.results.item.map((item: RSSItem) => {
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
