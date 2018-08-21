import * as React from 'react'
import fetchArticles from '../utils/fetchArticlesStrategy'

const ARTICLE_FETCH = 'ARTICLE_FETCH'
const ARTICLE_RECEIVE = 'ARTICLE_RECEIVE'

const requestArticles = (dispatch: ArticleActionDispatcher) => {
  fetchArticles()
    .then((articles: ArticleStore[]) => {
      return dispatch({
        type: ARTICLE_RECEIVE,
        payload: {
          articles: articles
        }
    })
  })
}

const reducer = (state: ArticleState, action: ArticleActionType): ArticleState => {
  if (action.type === ARTICLE_FETCH) {
    return {...state}
  }
  if (action.type === ARTICLE_RECEIVE && action.payload) {
    return {...state, ...action.payload }
  }
  return state
}

const ArticlesContext = React.createContext<ArticleState>({articles: [], dispatch: null})

export default ArticlesContext
export {
  reducer,
  requestArticles
}
