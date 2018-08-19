import * as React from 'react'
import styled from 'styled-components'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import ArticleList from '../organisms/ArticleList'
import ArticleStore from '../../types/ArticleStore'
import ArticlesContext from '../../stores/articlesContext'
import fetchArticles from '../../utils/fetchArticlesStrategy'

const PageWrapper = styled.div`
  max-width: 1280px;
  padding: 20px 10px;
`

interface State {
  articles: ArticleStore[]
}

const initialState: State = { articles: [] }

class IndexPage extends React.Component<{}, State> {
  readonly state: State = initialState
  constructor(props: any) {
    super(props)
    this.getArticles()
  }

  getArticles () {
    fetchArticles().then(articles => this.setState({articles}))
  }

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <PageWrapper>
          <ArticlesContext.Provider value={this.state.articles}>
            <ArticleList />
          </ArticlesContext.Provider>
        </PageWrapper>
      </PageTemplate>
    )
  }
}

export default IndexPage
