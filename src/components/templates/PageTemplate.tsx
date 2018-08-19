import * as React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  padding: 10px 0;
  margin: 0 auto;
`

export interface Props {
  header: JSX.Element
  footer: JSX.Element
  children: JSX.Element[] | JSX.Element
}

const PageTemplate = ({header, footer, children, ...props} : Props) => {
  return (
    <PageWrapper {...props}>
      {header}
      <ContentWrapper>
        {children}
      </ContentWrapper>
      {footer}
    </PageWrapper>
  )
}

export default PageTemplate
