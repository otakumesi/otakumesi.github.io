import * as React from 'react'

import ArticlesContext, { reducer } from '../stores/articlesContext'

class ArticleProvider extends React.Component<{}, ArticleState> {
  readonly state: ArticleState = {
    articles: [],
    dispatch: (action: ArticleActionType) => {
      this.setState((state: ArticleState) => reducer(state, action))
    }
  }

  render() {
    const { props, state} = this
    return (
      <ArticlesContext.Provider value={state}>{props.children}</ArticlesContext.Provider>
    )
  }
}

export default ArticleProvider
