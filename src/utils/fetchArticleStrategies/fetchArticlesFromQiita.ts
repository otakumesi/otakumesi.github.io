import * as format from 'date-fns/format'
const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const QIITA_ENDPOINT = 'https://qiita.com/api/v2/users/otakumesi/items'

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
      Promise.resolve(null)
    })

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

export default fetchArticlesFromQiita
