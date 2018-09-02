import * as React from 'react'

const ArticleContext =
  React.createContext<ArticleState>({
    articles: [],
    dispatch: undefined
  })

export default ArticleContext
