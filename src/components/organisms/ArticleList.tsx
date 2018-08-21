import * as React from 'react'
import styled from 'styled-components'
import Article from '../organisms/Article'
import withArticleConsumer from '../../contexts/articles/withArticleConsumer'

// TODO: 各種スマホに合わせて画面対応、styled-componentsはループが使えるので繰り返さなくても良さげ
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

const ArticleList = (state: ArticleState) => {
  return (
    <ArticleListWrapper>
      {state.articles.map(article => <Article key={article.uniqueKey} article={article} />)}
    </ArticleListWrapper>
  )
}

export default withArticleConsumer(ArticleList)
