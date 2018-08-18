import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import ArticlesContext from '../../stores/articlesContext'

const ArticleListWrapper = styled.div``

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
