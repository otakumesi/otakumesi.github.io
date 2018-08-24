import * as React from 'react'
import styled from 'styled-components'

const FooterWrapepr = styled.header`
  height: 100px;
  padding: 10px 20px 15px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return(
    <FooterWrapepr>
      © otakumesi
    </FooterWrapepr>
  )
}

export default Footer
