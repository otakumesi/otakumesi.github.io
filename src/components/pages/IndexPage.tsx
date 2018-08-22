import * as React from 'react'
import styled from 'styled-components'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import ArticleList from '../organisms/ArticleList'
import ArticleProvider from '../../contexts/articles/ArticleProvider'

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 25px;

  @media screen and (max-width: 740px) {
    padding: 20px 10px;
  }
`

// TODO: ソーシャル系のリンクをどこに置くかを検討
// - Twitter
// - Facebook
// - Mastodon?
// TODO: 履歴書のページを作る
// TODO: ソートできるようにする？

class IndexPage extends React.Component<{}, {}> {
  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <PageWrapper>
          <ArticleProvider>
            <ArticleList />
          </ArticleProvider>
        </PageWrapper>
      </PageTemplate>
    )
  }
}

export default IndexPage
