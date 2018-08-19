import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import ArticlesContext from '../../stores/articlesContext'

const ArticleListWrapper = styled.div`
  margin: 0 auto;
  column-count: 4;
  @media (max-width: 960px) {
    column-count: 3;
  }

  @media (max-width: 640px) {
    column-count: 2;
  }

  @media (max-width: 320px) {
    column-count: 1;
  }
`

const ArticleList = () => (
  <ArticleListWrapper>
        <ArticlesContext.Consumer>
          { articles =>
            articles.map(article => <Article key={article.uniqueKey} article={article} />)
          }
        </ArticlesContext.Consumer>
  </ArticleListWrapper>
)

export default ArticleList
