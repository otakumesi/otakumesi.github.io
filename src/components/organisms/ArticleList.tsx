import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import ArticleStore from '../../types/ArticleStore'

interface Props {
  articles: ArticleStore[]
}

const ArticleListHeader = styled.dl`
  height: 25px;
  border-left: 2px dotted #000;
`

const ArticleList = ({articles}: Props) => (
  <React.Fragment>
    <ArticleListHeader />
    {articles.map(article => <Article key={article.uniqueKey} article={article} />)}
  </React.Fragment>
)

export default ArticleList
