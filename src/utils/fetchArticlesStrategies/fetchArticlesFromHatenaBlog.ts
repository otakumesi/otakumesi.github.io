import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'
import { xml2js } from 'xml-js'

import extractTextFromHTML from '../extractTextFromHTML'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const HATENA_BLOG_ENDPOINT = "https://www.skyrocketing.work/rss"

const fetchArticlesFromHatenaBlog = async () => {
  const hatenaBlogFeedResponse = await fetch(HATENA_BLOG_ENDPOINT)
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

  if (!hatenaBlogFeedResponse) return null
  const hatenaBlogFeedXML = await hatenaBlogFeedResponse.text()
  const hatenaBlogFeed = xml2js(hatenaBlogFeedXML, {compact: true}) as XMLFeed

  return hatenaBlogFeed.rss.channel.item.map((item: RSSItem) => {
    const description = item.description ? extractTextFromHTML(item.description).slice(0, 70) : ''
    return {
      uniqueKey: `hatena-blog-${item.title["_text"]}`,
      media: 'HatenaBlog',
      title: item.title["_text"],
      description: description["_text"],
      url: item.link["_text"],
      color: '#008fde',
      date: format(new Date(item.pubDate["_text"]), DATETIME_FORMAT)
    }
  })
}

export default fetchArticlesFromHatenaBlog
