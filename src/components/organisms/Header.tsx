import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapepr = styled.header`
  border-top: 5px solid #FD6A02;
  border-bottom: 1px solid #ccc;
  max-height: 120px;
  width: 100%;
`

const HeaderInner = styled.div`
  margin: 0 auto;
  padding: 10px 20px 15px;
`

const BrandSpace = styled.div`
  height: 95px;
  display: flex;
  align-items: center;
`

const Logo = styled.a`
  font-size: 2.4em;
  text-decoration: none;
`

const Header = () => {
  return(
    <HeaderWrapepr>
      <HeaderInner>
        <BrandSpace>
          <Logo href="/">otakumesi#IO</Logo>
        </BrandSpace>
      </HeaderInner>
    </HeaderWrapepr>
  )
}

export default Header
