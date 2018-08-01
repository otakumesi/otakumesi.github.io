import * as React from 'react'
import Header from './organisms/Header'

export interface Props {}

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
