import * as React from 'react'
import ArticleContext from './context'

const withArticleConsumer = <
  T extends ArticleState,
  U = Pick<T, Exclude<keyof T, 'article' | 'dispatch'>>
  >(WrappedComponent: React.ComponentType<T>): React.ComponentType<U> =>
    class WithArticleConsumer extends React.Component<U> {
      render() {
        return (
          <ArticleContext.Consumer>
            { state => <WrappedComponent {...this.props} {...state} /> }
          </ArticleContext.Consumer>
        )
      }
    }

export default withArticleConsumer
