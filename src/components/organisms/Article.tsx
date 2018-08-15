import * as React from 'react'
import styled from 'styled-components'
import ArticleStore from '../../types/ArticleStore'

interface Props {
  key: string
  article: ArticleStore
}

interface MediaLabelProps {
  bgColor: string
}

const ArticleParagraph = styled.dl`
  height: 50px;
  position: relative;
  padding-left: 25px;
  display: flex;
  align-items: center;
  border-left: 2px solid #000;
`

const AricleSymbolMark = styled.div`
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #000;
`

const MediaLabel = styled.div`
  padding: 5px 7px;
  background-color: ${(props: MediaLabelProps) => props.bgColor};
  color: #fff;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 5px;
`

const Article = ({article}: Props) => {
  return (
    <ArticleParagraph>
      <AricleSymbolMark/>
    <MediaLabel bgColor={"red"}>{article.media}</MediaLabel>
      {article.title}
      {article.description}
    </ArticleParagraph>
  )
}

export default Article
