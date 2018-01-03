class QiitaActivity {
  static createFromJSON (articles) {
    return articles.map(article => {
      return new QiitaActivity(article.updated_at, article.url, article.title)
    })
  }

  constructor (datetime, url, title) {
    this.icon = 'quora'
    this.type = 'blogAricle'
    this.datetime = datetime
    this.url = url
    this.title = title
  }
}

export default QiitaActivity
