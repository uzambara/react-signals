import styled from 'styled-components'
import { Link } from 'react-router'

export const Container = styled.div`
  padding: 15px;
`

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  color: #3a3aaf;
  text-decoration: none;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`