import * as React from 'react'
import styled from 'styled-components'
import ArticleStore from '../../types/ArticleStore'

interface Props {
  key: string
  article: ArticleStore
}

interface MediaColorProps {
  mediaColor: string
}

const ArticleLink = styled.a`
  color: #000;
  text-decoration: none;
`

const ArticleCard = styled.dl`
  border-left: 3px solid ${(props: MediaColorProps) => props.mediaColor};
  width: 310px;
  margin: 0 10px 10px;
  position: relative;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #e8e8e8;
  }
`

const AricleHeader = styled.dt`
  padding: 15px 15px 0;
  border-top: 1px solid #ccc;
`

const ArticleTitle = styled.h1`
  font-size: 1.6em;
  font-weight: bold;
  margin-top: 34px;
  margin-right: 15px;
`

const ArticleContent = styled.dd`
  padding: 15px;
  border-right: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
`

const ArticleDescrition = styled.div`
  font-size: 1.2em;
`

const ArticleFooter = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  margin-right: 10px;
  border-top: 1px dotted #ccc;
  display: flex;
  justify-content: flex-end;
`

const MediaLabel = styled.span`
  padding: 3px 5px;
  background-color: ${(props: MediaColorProps) => props.mediaColor};
  color: #fff;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 5px;
  position: absolute;
  right: 15px;
  top: 10px;
`

const Article = ({article}: Props) => {
  return (
    <ArticleLink href={article.url}>
      <ArticleCard mediaColor={article.color}>
        <AricleHeader>
          <MediaLabel mediaColor={article.color}>{article.media}</MediaLabel>
          <ArticleTitle>{article.title}</ArticleTitle>
        </AricleHeader>
        <ArticleContent>
          <ArticleDescrition>
            {article.description}
          </ArticleDescrition>
          <ArticleFooter>
            {article.date}
          </ArticleFooter>
        </ArticleContent>
      </ArticleCard>
    </ArticleLink>
  )
}

export default Article
