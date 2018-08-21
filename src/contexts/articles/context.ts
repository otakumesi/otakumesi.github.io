import * as React from 'react'

const ArticleContext =
  React.createContext<ArticleState>({
    articles: [],
    dispatch: null
  })

export default ArticleContext
