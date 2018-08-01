import * as React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  padding: 10px 15px;
`

export interface Props {
  header: JSX.Element
  footer: JSX.Element
  children: JSX.Element[] | JSX.Element
}

const PageTemplate = (props: Props) => {
  return (
    <React.Fragment>
      {props.header}
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
      {props.footer}
    </React.Fragment>
  )
}

export default PageTemplate
