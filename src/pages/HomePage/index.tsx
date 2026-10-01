import { NavLink, useParams } from 'react-router'
import { HomePageTabs } from './models.ts'
import {
  HookExampleTab,
  InputsExampleTab,
  ModelTab,
  SignalInClassExampleTab
} from './modules'
import styled from 'styled-components'
import { SimpleExampleTab } from './modules'

const StyledTitle = styled.h3``

const NavStyled = styled.nav`
  display: flex;
  column-gap: 15px;
  padding: 15px;
`
const TabContentStyled = styled.div`
  padding: 10px 15px;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3a3aaf;

  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`

export const HomePage = () => {
  const { tab } = useParams<{ tab: string }>()

  return (
    <>
      <StyledTitle>Signals in React</StyledTitle>
      <NavStyled>
        <StyledNavLink to={`/home/${HomePageTabs.SimpleExample}`}>
          Simple example
        </StyledNavLink>
        <StyledNavLink to={`/home/${HomePageTabs.HooksExample}`}>
          Hooks example
        </StyledNavLink>
        <StyledNavLink to={`/home/${HomePageTabs.SignalInClassExampleTab}`}>
          Signals in class example
        </StyledNavLink>
        <StyledNavLink to={`/home/${HomePageTabs.ModelExample}`}>
          Model example
        </StyledNavLink>
        <StyledNavLink to={`/home/${HomePageTabs.InputsExample}`}>
          Inputs example
        </StyledNavLink>
      </NavStyled>
      <TabContentStyled>
        {tab === HomePageTabs.SimpleExample && <SimpleExampleTab />}
        {tab === HomePageTabs.HooksExample && <HookExampleTab />}
        {tab === HomePageTabs.SignalInClassExampleTab && (
          <SignalInClassExampleTab />
        )}
        {tab === HomePageTabs.ModelExample && <ModelTab />}
        {tab === HomePageTabs.InputsExample && <InputsExampleTab />}
      </TabContentStyled>
    </>
  )
}
