import { orderBy } from 'lodash-es'
import fetchArticlesFromQiita from './fetchArticlesStrategies/fetchArticlesFromQiita'
// import fetchArticlesFromScrapbox from './fetchArticlesStrategies/fetchArticlesFromScrapbox'
import fetchArticlesFromHatenaBlog from './fetchArticlesStrategies/fetchArticlesFromHatenaBlog'
// import fetchArticlesFromMedium from './fetchArticlesStrategies/fetchArticlesFromMedium'
import fetchRepositoriesFromGithub from './fetchArticlesStrategies/fetchRepositoriesFromGithub'
// import fetchArticlesFromNote from './fetchArticlesStrategies/fetchArticlesFromNote'

const FETCH_ARTICLES_STRATEGIES = [
  fetchArticlesFromQiita,
  // fetchArticlesFromScrapbox,
  fetchArticlesFromHatenaBlog,
  // fetchArticlesFromMedium,
  fetchRepositoriesFromGithub,
  // fetchArticlesFromNote
]

const fetchArticles = async () => {
  const articlesSet = await Promise.all(FETCH_ARTICLES_STRATEGIES.map(strategy => strategy()))
  const articles = articlesSet.reduce((res, item) => {
        if (res && item) {
         return res.concat(item)
        }
        return res
      }, [])
  return orderBy(articles, 'date', 'desc')
}

export default fetchArticles
