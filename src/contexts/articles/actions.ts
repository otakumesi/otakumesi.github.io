import fetchArticles from '../../utils/fetchArticlesStrategy'
import { ARTICLE_RECEIVE } from './constants'

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

export {
  requestArticles
}
