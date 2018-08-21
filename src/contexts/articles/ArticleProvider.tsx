import * as React from 'react'

import articleReducer from './reducer'
import ArticleContext from './context'

class ArticleProvider extends React.Component<{}, ArticleState> {
  readonly state: ArticleState = {
    articles: [],
    dispatch: (action: ArticleActionType) => {
      this.setState((state: ArticleState) => articleReducer(state, action))
    }
  }

  render() {
    const { props, state} = this
    return (
      <ArticleContext.Provider value={state}>{props.children}</ArticleContext.Provider>
    )
  }
}

export default ArticleProvider
