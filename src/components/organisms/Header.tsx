import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapepr = styled.header`
  border-top: 5px solid #FD6A02;
  height: 200px;
  padding: 10px 20px 15px;
`

export interface Props {}

const Header = (props: Props) => {
  return(
    <HeaderWrapepr>
    </HeaderWrapepr>
  )
}

export default Header
