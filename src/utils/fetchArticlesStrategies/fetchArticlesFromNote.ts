import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'
import { xml2js } from 'xml-js'

import extractTextFromHTML from '../extractTextFromHTML'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const NOTE_ENDPOINT = "https://note.mu/otakumesi/rss"

const fetchArticlesFromNote = async () => {
  const noteFeedResponse = await fetch(NOTE_ENDPOINT)
    .then(items => {
      if(items.status !== 200) {
        return null
      }
      return items
    })
    .catch(err => {
      Sentry.captureException(err)
      return null
    })
  if (!noteFeedResponse) return null

  const noteFeedXML = await noteFeedResponse.text()
  const noteFeed = xml2js(noteFeedXML, {compact: true}) as XMLFeed

  if(noteFeed.rss.channel.item instanceof Array) {
    return noteFeed.rss.channel.item.map(item => {
      return buildNoteArticle(item)
    })
  }

  return Array.of(buildNoteArticle(noteFeed.rss.channel.item))
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
