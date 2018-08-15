import * as React from 'react'
import styled from 'styled-components'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Timeline from '../organisms/Timeline'
import ArticleStore from '../../types/ArticleStore'

const articles:ArticleStore[] = [
  {
    uniqueKey: "test",
    media: "medium",
    date: '2018/08/15',
    title: 'brabra',
    description: 'brabra',
    url: 'https://yahoo.co.jp'
  }
]

const PageWrapper = styled.div`
  padding: 20px 10px;
`

const TimelinePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <PageWrapper>
        <Timeline articles={articles} />
      </PageWrapper>
    </PageTemplate>
  )
}

export default TimelinePage
