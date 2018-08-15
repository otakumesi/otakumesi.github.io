import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import ArticleStore from '../../types/ArticleStore'

interface Props {
  articles: ArticleStore[]
}

const TimelineHeader = styled.dl`
  height: 25px;
  border-left: 2px dotted #000;
`

const Timeline = ({articles}: Props) => (
  <React.Fragment>
    <TimelineHeader />
    {articles.map(article => <Article key={article.uniqueKey} article={article} />)}
  </React.Fragment>
)

export default Timeline
