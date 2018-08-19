import * as React from 'react'

const withLoad = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class WithArticles extends React.Component<P> {
    render() {
      return (
        <React.Fragment />
      )
    }
  }

export default withLoad
