import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const SCRAPBOX_ENDPOINT = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'https%3A%2F%2Fscrapbox.io%2Fapi%2Fpages%2Fotakumesi'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

const fetchArticlesFromScrapbox = async () => {
  const scrapboxApi:YQLApi<ScrapboxApiPages> = await fetch(SCRAPBOX_ENDPOINT)
    .then(pages => {
      return pages.json()
    })
    .catch(err => {
      Sentry.captureException(err)
      return null
    })

  if (!scrapboxApi) return null

  return scrapboxApi.query.results.json.pages.map(item => {
    return {
      uniqueKey: `scrapbox-${item.title}`,
      media: 'scrapbox',
      title: item.title,
      description: item.descriptions.join(' ').slice(0, 70),
      url: `https://scrapbox.io/otakumesi/${item.title}`,
      color: '#39ac86',
      date: format(new Date(item.updated * 1000), DATETIME_FORMAT)
    }
  })
}

export default fetchArticlesFromScrapbox
