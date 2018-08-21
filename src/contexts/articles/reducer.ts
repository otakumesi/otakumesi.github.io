import { ARTICLE_FETCH, ARTICLE_RECEIVE } from './constants'

const articleReducer = (state: ArticleState, action: ArticleActionType): ArticleState => {
  if (action.type === ARTICLE_FETCH) {
    return {...state}
  }
  if (action.type === ARTICLE_RECEIVE && action.payload) {
    return {...state, ...action.payload }
  }
  return state
}

export default articleReducer
