import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'
import extractTextFromHTML from '../extractTextFromHTML'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const NOTE_ENDPOINT = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'https%3A%2F%2Fnote.mu%2Fotakumesi%2Frss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

const fetchArticlesFromNote = async () => {
  const noteFeed:YQLApi<RSSFeed> = await fetch(NOTE_ENDPOINT)
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

  if (!noteFeed) return null

  if(noteFeed.query.results.item instanceof Array) {
    return noteFeed.query.results.item.map(item => {
      return buildNoteArticle(item)
    })
  }

  return Array.of(buildNoteArticle(noteFeed.query.results.item))
}

const buildNoteArticle = (item:RSSItem) => {
  const description = item.encoded ? extractTextFromHTML(item.encoded).slice(0, 70) : ''
  return {
    uniqueKey: `note-${item.title}`,
    media: 'note',
    title: item.title,
    description: description,
    url: item.link,
    color: '#2cb696',
    date: format(new Date(item.pubDate), DATETIME_FORMAT)
  }
}

export default fetchArticlesFromNote
