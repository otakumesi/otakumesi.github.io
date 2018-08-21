import * as React from 'react'
import styled from 'styled-components'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import ArticleList from '../organisms/ArticleList'
import ArticleProvider from '../../contexts/ArticleProvider'

const PageWrapper = styled.div`
  max-width: 1280px;
  padding: 20px 10px;
`

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
