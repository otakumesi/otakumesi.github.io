import * as React from 'react'
import styled from 'styled-components'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import ArticleList from '../organisms/ArticleList'
import ArticleStore from '../../types/ArticleStore'
import ArticlesContext from '../../stores/articlesContext'

const PageWrapper = styled.div`
  padding: 20px 10px;
`

const articles:ArticleStore[] = [
  { uniqueKey: 'test',
    media: 'medium',
    date: '2018/08/15',
    title: 'brabra',
    description: 'brabra',
    url: 'https://yahoo.co.jp',
    color: 'red'
  }
]

const IndexPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <PageWrapper>
        <ArticlesContext.Provider value={articles}>
          <ArticleList />
        </ArticlesContext.Provider>
      </PageWrapper>
    </PageTemplate>
  )
}

export default IndexPage
