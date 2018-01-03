class HatenaBlogActivity {
  static createFromRSS (articles) {
    return articles.map(article => {
      return new HatenaBlogActivity(article.pubDate, article.link, article.title)
    })
  }

  constructor (datetime, url, title) {
    this.icon = 'rss'
    this.type = 'blogAricle'
    this.datetime = datetime
    this.url = url
    this.title = title
  }
}

export default HatenaBlogActivity
