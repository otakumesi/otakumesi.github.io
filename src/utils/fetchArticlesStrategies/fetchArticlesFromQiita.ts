import * as format from 'date-fns/format'
import * as Sentry from '@sentry/browser'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const QIITA_ENDPOINT = 'https://qiita.com/api/v2/users/otakumesi/items'

const fetchArticlesFromQiita = async () => {
  const qiitaItems:QiitaApiItem[] = await fetch(QIITA_ENDPOINT)
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

  if (!qiitaItems) return null

  return qiitaItems.map(item => {
    return {
      uniqueKey: `qiita-${item.title}`,
      media: 'Qiita',
      title: item.title,
      description: item.body.slice(0, 70),
      url: item.url,
      color: '#4cb10d',
      date: format(item.updated_at, DATETIME_FORMAT)
    }
  })
}

export default fetchArticlesFromQiita
