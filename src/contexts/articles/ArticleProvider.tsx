import * as React from 'react'

import articleReducer from './reducer'
import ArticleContext from './context'
import { requestArticles } from '../../contexts/articles/actions'

class ArticleProvider extends React.Component<{}, ArticleState> {
  readonly state: ArticleState = {
    articles: [],
    dispatch: (action: ArticleActionType) => {
      this.setState((state: ArticleState) => articleReducer(state, action))
    }
  }

  componentDidMount() {
    if(this.state.dispatch) {
      requestArticles(this.state.dispatch)
    }
  }

  render() {
    const { props, state } = this

    return (
      <ArticleContext.Provider value={state}>{props.children}</ArticleContext.Provider>
    )
  }
}

export default ArticleProvider
