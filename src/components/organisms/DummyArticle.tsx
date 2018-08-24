import * as React from 'react'
import styled from 'styled-components'


const ArticleCard = styled.article`
  break-inside: avoid;
  border-left: 3px solid #8e8e8e;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  min-width: 270px;
  margin-bottom: 20px;
  position: relative;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #e8e8e8;
  }
`

const DummyMediaLabel = styled.span`
  width: 60px;
  height: 24px;
  background-color: #ccc;
  color: #fff;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 2px;
  position: absolute;
  right: 15px;
  top: 10px;
`

const AricleHeader = styled.div`
  padding: 20px 20px 0;
  border-top: 1px solid #ccc;
`

const ArticleTitle = styled.div`
  margin-top: 34px;
  background-color: #ccc;
  height: 25px;
`

const ArticleContent = styled.div`
  padding: 20px;
`

const ArticleDescription = styled.div`
  background-color: #ccc;
  height: 50px;
`

const ArticleFooter = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  margin-right: 10px;
  border-top: 1px dotted #ccc;
  display: flex;
  justify-content: flex-end;
`

const ArticleDate = styled.span`
  background-color: #ccc;
  height: 16px;
  width: 135px;
`

const Article = () => {
  return (
    <ArticleCard>
      <AricleHeader>
        <DummyMediaLabel />
        <ArticleTitle />
      </AricleHeader>
      <ArticleContent>
        <ArticleDescription>
        </ArticleDescription>
        <ArticleFooter>
          <ArticleDate />
        </ArticleFooter>
      </ArticleContent>
    </ArticleCard>
  )
}

export default Article
