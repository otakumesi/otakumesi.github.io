import * as React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Timeline from '../organisms/Timeline'

export interface Props {}

const TimelinePage = (props: Props) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Timeline />
    </PageTemplate>
  )
}

export default TimelinePage
