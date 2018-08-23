import * as format from 'date-fns/format'

const DATETIME_FORMAT = 'YYYY/MM/DD HH:mm:ss'

const HATENA_BLOG_ENDPOINT = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fotakumesi.hatenablog.jp%2Frss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

const fetchArticlesFromHatenaBlog = async () => {
  const hatenaBlogFeed:YQLApi<HatenaBlogFeed> = await fetch(HATENA_BLOG_ENDPOINT)
    .then(items => {
      if(items.status !== 200) {
        return null
      }
      return items.json()
    })
    .catch(err => {
      return null
    })

  if (!hatenaBlogFeed) return null

  return hatenaBlogFeed.query.results.item.map(item => {
    return {
      uniqueKey: `hatena-blog-${item.title}`,
      media: 'HatenaBlog',
      title: item.title,
      description: extractTextFromHTML(item.description).slice(0, 70),
      url: item.link,
      color: '#008fde',
      date: format(new Date(item.pubDate), DATETIME_FORMAT)
    }
  })
}

const extractTextFromHTML= (html:string):string => {
  let span = document.createElement('span')
  span.innerHTML = html
  return span.textContent || span.innerText
}

export default fetchArticlesFromHatenaBlog
