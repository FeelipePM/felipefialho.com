import styled from 'styled-components'

import * as V from 'styles/variables'
import * as T from 'styles/typography'

export const BlogList = styled.section`
  display: block;

  &:not(:first-child) {
    margin-top: ${V.Space.md};
  }
`

export const Title = styled.h1`
  ${T.Subtitle}

  &:not(:last-child) {
    margin-bottom: ${V.Space.sm};
  }
`

export const Nav = styled.nav`
  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`
