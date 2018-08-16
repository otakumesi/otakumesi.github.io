import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import ArticleStore from '../../types/ArticleStore'

interface Props {
  articles: ArticleStore[]
}

const ArticleListWrapper = styled.div``

const ArticleList = ({articles}: Props) => (
  <ArticleListWrapper>
    {articles.map(article => <Article key={article.uniqueKey} article={article} />)}
  </ArticleListWrapper>
)

export default ArticleList
