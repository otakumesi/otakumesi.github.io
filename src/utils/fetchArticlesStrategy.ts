import { orderBy } from 'lodash-es'
import fetchArticlesFromQiita from './fetchArticleStrategies/fetchArticlesFromQiita'
import fetchArticlesFromScrapbox from './fetchArticleStrategies/fetchArticlesFromScrapbox'
import fetchArticlesFromHatenaBlog from './fetchArticleStrategies/fetchArticlesFromHatenaBlog'
import fetchRepositoriesFromGithub from './fetchArticleStrategies/fetchRepositoriesFromGithub'

const FETCH_ARTICLES_STRATEGIES = [
  fetchArticlesFromQiita,
  fetchArticlesFromScrapbox,
  fetchArticlesFromHatenaBlog,
  fetchRepositoriesFromGithub
]

const fetchArticles = async () => {
  const articles = await Promise.all(FETCH_ARTICLES_STRATEGIES.map(strategy => strategy()))
    .then((articlesSet:MaybeArticleSet) => {
      return articlesSet.reduce((res, item) => {
        if (res && item) {
         return res.concat(item)
        }
        return res
      }, [])
    })
  return orderBy(articles as ArticleStore[], 'date', 'desc')
}

export default fetchArticles
