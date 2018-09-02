import * as React from 'react'
import styled from 'styled-components'

const ArticleLink = styled.a`
  color: #000;
  text-decoration: none;
  display: block;
  margin-bottom: 20px;
`

const ArticleCard = styled.article`
  break-inside: avoid;
  border-left: 3px solid ${(props: MediaColorProps) => props.mediaColor};
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  min-width: 270px;
  position: relative;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #e8e8e8;
  }
`

const AricleHeader = styled.header`
  padding: 20px 20px 0;
  border-top: 1px solid #ccc;
`

const ArticleTitle = styled.h1`
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 34px;
`

const ArticleContent = styled.div`
  padding: 20px;
`

const ArticleDescription = styled.p`
  font-size: 1.1em;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ArticleFooter = styled.footer`
  margin-top: 20px;
  padding-top: 20px;
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

const Article:React.SFC<ArticleListProps> = ({article}) => {
  return (
    <ArticleLink href={article.url}>
      <ArticleCard mediaColor={article.color}>
        <AricleHeader>
          <MediaLabel mediaColor={article.color}>{article.media}</MediaLabel>
          <ArticleTitle>{article.title}</ArticleTitle>
        </AricleHeader>
        <ArticleContent>
          <ArticleDescription>
            {article.description}
          </ArticleDescription>
          <ArticleFooter>
            <time>{article.date}</time>
          </ArticleFooter>
        </ArticleContent>
      </ArticleCard>
    </ArticleLink>
  )
}

export default Article
