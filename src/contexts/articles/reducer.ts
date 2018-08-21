import { ARTICLE_FETCH, ARTICLE_RECEIVE } from './constants'

const articleReducer = (state: ArticleState, action: ArticleActionType): ArticleState => {
  switch(action.type) {
    case ARTICLE_FETCH:
      return {...state}
    case ARTICLE_RECEIVE:
      if(action.payload) {
        return {...state, ...action.payload }
      }
      return state
    default:
      return state
  }
}

export default articleReducer
