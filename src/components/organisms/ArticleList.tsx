import * as React from 'react'
import styled from 'styled-components'
import { isEmpty, times } from 'lodash-es'

import Article from '../organisms/Article'
import DuumyArticle from './DummyArticle'
import withArticleConsumer from '../../contexts/articles/withArticleConsumer'

const DummyArticleNumber = 25

const ArticleListWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  column-count: 4;
  column-gap: 25px;

  @media screen and (max-width: 1430px) {
    column-count: 3;
  }

  @media screen and (max-width: 1085px) {
    column-count: 2;
  }

  @media screen and (max-width: 740px) {
    column-count: 1;
  }
`

const createDummyArticles = () => (times(DummyArticleNumber, () => <DuumyArticle />))

const createArticles = (articles:ArticleStore[]) => (articles.map(article => <Article key={article.uniqueKey} article={article} />))

const ArticleList = (state: ArticleState) => {
  const Items = isEmpty(state.articles) ? createDummyArticles() : createArticles(state.articles)
  return (
    <ArticleListWrapper>
      {Items}
    </ArticleListWrapper>
  )
}

export default withArticleConsumer(ArticleList)
