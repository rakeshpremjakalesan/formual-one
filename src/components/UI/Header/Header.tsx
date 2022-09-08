import { useSelector } from 'react-redux'
import Driver from './UI/Driver'
import {
  StyledHeader,
  StyledTitle,
  StyledHeaderContainer,
} from './Header.styles'
import Season from './UI/Season'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const driverCode = useSelector((state: any) => state.driverInfo)
  const navigateHome = () => {
    navigate('/')
  }
  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer
          variant="logo"
          highlight="link"
          onClick={navigateHome}
          data-testid="home"
        >
          <StyledTitle variant="logo">
            <i>F1</i>
          </StyledTitle>
          <StyledTitle variant="logoTitle">
            <i>Formula One</i>
          </StyledTitle>
        </StyledHeaderContainer>
        <StyledHeaderContainer>
          <Season driverCode={driverCode} />
        </StyledHeaderContainer>
        <StyledHeaderContainer variant="info">
          <Driver driverCode={driverCode} />
        </StyledHeaderContainer>
      </StyledHeader>
    </>
  )
}
