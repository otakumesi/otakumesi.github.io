import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import withArticleConsumer from '../../contexts/articles/withArticleConsumer'

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

const ArticleList = (state: ArticleState) => {
  return (
    <ArticleListWrapper>
      {state.articles.map(article => <Article key={article.uniqueKey} article={article} />)}
    </ArticleListWrapper>
  )
}

export default withArticleConsumer(ArticleList)
